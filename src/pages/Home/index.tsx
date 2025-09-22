import Hero from '@/components/Hero'
import MeetTheAgent from '@/components/MeetTheAgent'
import { CompanyIntroduction } from './CompanyIntroduction'
import { FeaturedSection } from './FeaturedSection'
import { TestimonialsSection } from './TestimonialsSection'
import { RecentBlogsSection } from './RecentBlogsSection'
import { CTASection } from './CTASection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MeetTheAgent />
      <CompanyIntroduction />
      <FeaturedSection />
      <TestimonialsSection />
      <RecentBlogsSection />
      <CTASection />
    </div>
  )
}

export default Home
