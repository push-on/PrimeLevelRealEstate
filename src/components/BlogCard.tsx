import { Card, CardContent } from '@/components/ui/card'
import { BlogPost } from '@/lib/blog'
import { Link } from 'react-router-dom'

interface BlogCardProps {
	post: BlogPost
}

const BlogCard = ({ post }: BlogCardProps) => {
	// Deterministic placeholder using picsum.photos seeded by post id
	const sig = Math.abs(Array.from(post.id).reduce((acc, ch) => acc + ch.charCodeAt(0), 0)) % 1000
	const placeholder1200 = `https://picsum.photos/seed/${sig}/1200/675`
	const placeholder800 = `https://picsum.photos/seed/${sig}/800/450`
	const imgSrc = post.image || placeholder1200
	const imgSrcSet = `${post.image ? post.image : placeholder800} 800w, ${post.image ? post.image : placeholder1200} 1200w`
	const sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'

	return (
		<Card className="hover:shadow-elegant transition-smooth group">
			<CardContent className="p-0">
				<Link to={`/blog/${post.id}`} className="block">
					<div className="aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
						<img
							src={imgSrc}
							srcSet={imgSrcSet}
							sizes={sizes}
							width={1200}
							height={675}
							loading="lazy"
							decoding="async"
							alt={post.title}
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<div className="p-5">
						<div className="text-xs uppercase tracking-wide text-accent mb-2">{post.category}</div>
						<h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
						<p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
						<div className="mt-4 text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()} • {post.author}</div>
					</div>
				</Link>
			</CardContent>
		</Card>
	)
}

export default BlogCard


