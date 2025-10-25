import { Link } from 'react-router-dom'

// ... (rest of the imports)
import { openEmail } from '@/lib/email'
import { openWhatsApp } from '@/lib/whatsapp'
import Hero from '@/pages/Home/Hero'
import MeetTheAgent from '@/pages/Home/MeetTheAgent'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import { getRecentPosts } from '@/lib/blog'
import {
  Home as HomeIcon,
  Users,
  Award,
  MapPin,
  Phone,
  Star,
  ArrowRight
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8 text-accent" />,
      title: "Buy Properties",
      description: "Find your dream home with our extensive property listings and expert guidance.",
      link: "/contact?service=buying"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Sell Properties",
      description: "Get the best value for your property with our proven marketing strategies.",
      link: "/contact?service=selling"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Property Management",
      description: "Professional management services to maximize your investment returns.",
      link: "/contact?service=management"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Rental Services",
      description: "Find the perfect rental property or manage your rental investments.",
      link: "/contact?service=rental"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Prime Level Real Estate helped me find my perfect home. Their team was professional and made the process seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      content: "Excellent service and market knowledge. They helped me make profitable investment decisions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      content: "As a first-time buyer, I was nervous, but they guided me through every step with patience and expertise.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      <MeetTheAgent />

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">
              Welcome to Prime Level Real Estate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience in real estate, we're dedicated to helping you
              achieve your property goals. Whether you're buying, selling, or investing, our
              expert team provides personalized service and market insights to ensure success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <Card className="hover:shadow-elegant transition-smooth group h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Your Success is our Top Priority
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Market Knowledge</h4>
                    <p className="text-muted-foreground">
                      Our team stays current with market trends and pricing to give you the competitive edge.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Service</h4>
                    <p className="text-muted-foreground">
                      Every client receives tailored solutions based on their unique needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Proven Track Record</h4>
                    <p className="text-muted-foreground">
                      With 200+ successful transactions, we have the experience you can trust.
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="luxury" size="lg" className="mt-8">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-elegant">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-muted-foreground mb-6">Client Satisfaction Rate</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on 200+ client reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Recent Blogs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="heading-lg mb-2">Recent Articles</h2>
              <p className="text-muted-foreground">Insights and guides from our team</p>
            </div>
            <Button variant="outline" className="hidden md:inline-flex" onClick={() => window.location.assign('/blog')}>View All</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRecentPosts(3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and let us help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" className="bg-white text-primary hover:bg-white/90" onClick={openWhatsApp}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button variant="outline-dark" size="lg" className="border-white text-white hover:bg-white hover:text-primary" onClick={openEmail}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home