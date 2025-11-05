import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import { getRecentPosts } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const RecentBlogsSection = () => {
	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div 
					className="flex items-end justify-between mb-10"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<div>
						<h2 className="heading-lg mb-2">Recent Articles</h2>
						<p className="text-muted-foreground">Insights and guides from our team</p>
					</div>
					<Button
						variant="outline"
						className="hidden md:inline-flex"
						onClick={() => window.location.assign('/blog')}
					>
						View All
					</Button>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{getRecentPosts(3).map((post, index) => (
						<motion.div 
							key={post.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
						>
							<BlogCard post={post} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
