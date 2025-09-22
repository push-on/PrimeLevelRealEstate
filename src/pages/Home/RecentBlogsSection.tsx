import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import { getRecentPosts } from '@/lib/blog'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

export const RecentBlogsSection = () => {
	const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })
	return (
		<section ref={ref} className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-end justify-between mb-10">
					<div>
						<h2 className={cn(
							"heading-lg mb-2 scroll-hidden",
							isInView && "scroll-show"
						)}>Recent Articles</h2>
						<p className={cn(
							"text-muted-foreground scroll-hidden",
							isInView && "scroll-show",
							isInView && "[transition-delay:200ms]"
						)}>Insights and guides from our team</p>
					</div>
					<Button
						variant="outline"
						className={cn(
							"hidden md:inline-flex scroll-hidden",
							isInView && "scroll-show",
							isInView && "[transition-delay:300ms]"
						)}
						onClick={() => window.location.assign('/blog')}
					>
						View All
					</Button>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{getRecentPosts(3).map((post, index) => (
						<div
							key={post.id}
							className={cn(
								"scroll-hidden",
								isInView && "scroll-show",
								isInView && `[transition-delay:${400 + index * 200}ms]`
							)}
						>
							<BlogCard post={post} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
