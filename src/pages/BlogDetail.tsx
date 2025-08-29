import { useParams, Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/blog'

// Load all markdown files as raw strings
const mdFiles = import.meta.glob('/src/content/blogs/*.md', { as: 'raw' }) as Record<string, () => Promise<string>>

function parseFrontmatter(md: string) {
	if (md.startsWith('---')) {
		const end = md.indexOf('\n---', 3)
		if (end !== -1) {
			const fm = md.slice(3, end).trim()
			const body = md.slice(end + 4).trim()
			return { frontmatter: fm, content: body }
		}
	}
	return { frontmatter: '', content: md }
}

const BlogDetail = () => {
	const { id } = useParams<{ id: string }>()
	const post = useMemo(() => blogPosts.find(p => p.id === id), [id])
	const [content, setContent] = useState<string>('')
	const [error, setError] = useState<string>('')

	useEffect(() => {
		let cancelled = false
		async function load() {
			if (!id || !post) return

			// The content is already in the post object, no need to fetch it.
			if (post.content.startsWith('See ')) {
				const path = post.content.substring(4)
				const key = `/src/content/blogs/${path.split('/').pop()}`
				try {
					const raw = await mdFiles[key]()
					if (cancelled) return
					const { content } = parseFrontmatter(raw)
					setContent(content)
				} catch {
					if (!cancelled) setContent('Failed to load content.')
				}
			} else {
				setContent(post.content)
			}
		}
		load()
		return () => { cancelled = true }
	}, [id, post])

	if (!post) {
		return (
			<div className="min-h-screen pt-20">
				<section className="py-20">
					<div className="max-w-3xl mx-auto px-4">
						<Card>
							<CardContent className="p-8 text-center">
								<h1 className="heading-lg mb-4">Post not found</h1>
								<Link to="/blog"><Button variant="luxury">Back to Blog</Button></Link>
							</CardContent>
						</Card>
					</div>
				</section>
			</div>
		)
	}

	return (
		<div className="min-h-screen pt-20">
			<section className="py-16 bg-background border-b">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-xs uppercase tracking-wide text-accent mb-2">{post.category}</div>
					<h1 className="heading-lg mb-3">{post.title}</h1>
					<div className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()} • {post.author}</div>
				</div>
			</section>

			<section className="py-10">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					{error ? (
						<Card><CardContent className="p-8 text-center text-muted-foreground">{error}</CardContent></Card>
					) : (
						<article className="prose prose-neutral max-w-none">
							<div dangerouslySetInnerHTML={{ __html: content || 'Loading...' }} />
						</article>
					)}
					<div className="mt-10">
						<Link to="/blog"><Button variant="outline">← Back to Blog</Button></Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default BlogDetail


