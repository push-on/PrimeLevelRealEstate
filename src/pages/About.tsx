import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { openWhatsApp } from '@/lib/whatsapp'
import { openEmail } from '@/lib/email'
import {
  Users,
  Award,
  Target,
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import CountUp from '@/components/CountUp'
import { motion } from 'framer-motion'

const About = () => {
  // Add padding-top to account for fixed navigation
  const pageStyle = {
    paddingTop: '5rem' // 80px to match navigation height
  }

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Client-First Approach",
      description: "We put our clients' needs and goals at the center of everything we do."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Results-Driven",
      description: "We're committed to delivering measurable results and exceeding expectations."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Professional Excellence",
      description: "We maintain the highest standards of professionalism and expertise."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Community Focus",
      description: "We're deeply invested in the communities we serve and their growth."
    }
  ]

  const achievements = [
    "200+ successful property transactions",
    "98% client satisfaction rate",
    "5+ years of market experience",
    "Award-winning customer service",
    "Licensed and insured professionals",
    "Extensive local market knowledge"
  ]



  return (
    <div className="min-h-screen pt-20">
      <PageHeader
        title="About Prime Level Real Estate"
        subtitle="Building lasting relationships through exceptional real estate service. Our story is one of dedication, expertise, and unwavering commitment to our clients."
      />

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="heading-lg mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded by Imtaz Ahmed, Prime Level Real Estate began as a small real estate
                  agency with a big vision: to transform how people experience buying and selling
                  properties. What started as a one-person operation has grown into a full-service
                  real estate company serving thousands of clients.
                </p>
                <p>
                  Our journey hasn't been without challenges, but each obstacle has strengthened
                  our resolve to provide exceptional service. We've weathered market fluctuations,
                  adapted to new technologies, and always kept our clients' best interests at heart.
                </p>
                <p>
                  Today, Prime Level Real Estate is recognized as a leader in the local real estate market,
                  known for our integrity, expertise, and personalized approach to every transaction.
                </p>
              </div>
              <Button
                variant="luxury"
                size="lg"
                className="mt-8"
                onClick={() => openWhatsApp("I'd like to see your available properties.")}
              >
                View Our Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="bg-primary/5 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To make real estate transactions seamless, transparent, and successful
                    for every client while building lasting relationships based on trust and expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and innovative real estate company in our market,
                    setting new standards for client service and professional excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="heading-lg mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-elegant transition-smooth group h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-4">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="heading-lg mb-6">Our Achievements</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Over the years, we've built a track record of success that speaks to
                our commitment to excellence and client satisfaction.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * index }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="bg-primary p-8 rounded-2xl text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={200} suffix="+" />
                  </div>
                  <div className="text-white/80 text-sm">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={5} suffix="+" />
                  </div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={98} suffix="%" />
                  </div>
                  <div className="text-white/80 text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={24} />/7
                  </div>
                  <div className="text-white/80 text-sm">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="heading-lg text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the Prime Level Real Estate difference. Let's discuss your real estate goals today.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              variant="premium"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={openEmail}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default About