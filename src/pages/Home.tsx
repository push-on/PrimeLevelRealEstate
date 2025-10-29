import Hero from './Home/Hero'
import MeetTheAgent from '@/pages/Home/MeetTheAgent'
import { CompanyIntroduction } from './Home/CompanyIntroduction'
import { FeaturedSection } from './Home/FeaturedSection'
import { TestimonialsSection } from './Home/TestimonialsSection'
import { RecentBlogsSection } from './Home/RecentBlogsSection'
import { CTASection } from './Home/CTASection'

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