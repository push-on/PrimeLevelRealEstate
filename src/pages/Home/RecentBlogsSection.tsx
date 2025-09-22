import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import { getRecentPosts } from '@/lib/blog'

export const RecentBlogsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getRecentPosts(3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
