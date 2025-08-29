import PageHeader from '@/components/PageHeader';
import { useMemo, useState } from 'react'
import { blogCategories, blogPosts } from '@/lib/blog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BlogCard from '@/components/BlogCard'

const Blog = () => {
	const [query, setQuery] = useState('')
	const [activeCategory, setActiveCategory] = useState<string>('All')

	const categories = useMemo(() => ['All', ...blogCategories], [])

	const filtered = useMemo(() => {
		return blogPosts.filter((p) => {
			const matchCat = activeCategory === 'All' || p.category === activeCategory
			const q = query.toLowerCase().trim()
			const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || (p.tags || []).some(t => t.toLowerCase().includes(q))
			return matchCat && matchQ
		})
	}, [activeCategory, query])

	return (
		<div className="min-h-screen pt-20">
			<PageHeader 
				title="Blog"
				subtitle="Insights, guides, and news from Prime Level Real Estate."
			/>

			<section className="py-10 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8">
						<div className="flex flex-wrap gap-2">
							{categories.map((c) => (
								<Button key={c} variant={activeCategory === c ? 'luxury' : 'outline'} size="sm" onClick={() => setActiveCategory(c)}>
									{c}
								</Button>
							))}
						</div>
						<div className="md:ml-auto w-full md:w-72">
							<Input
								placeholder="Search articles..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
						</div>
					</div>

					{filtered.length === 0 ? (
						<Card>
							<CardContent className="p-8 text-center text-muted-foreground">
								No articles found. Try a different search or category.
							</CardContent>
						</Card>
					) : (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filtered.map((post) => (
								<BlogCard key={post.id} post={post} />
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	)
}

export default Blog


