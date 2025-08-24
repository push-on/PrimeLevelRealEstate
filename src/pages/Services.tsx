import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Home,
  TrendingUp,
  Key,
  Settings,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  Calendar,
  FileText
} from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: <Home className="h-12 w-12 text-accent" />,
      title: "Buy Properties",
      description: "Find your perfect home with our comprehensive buying services",
      features: [
        "Extensive property search and filtering",
        "Market analysis and pricing guidance",
        "Negotiation and closing support",
        "First-time buyer programs",
        "Investment property consultation"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Sell Properties",
      description: "Maximize your property value with our proven selling strategies",
      features: [
        "Professional market evaluation",
        "Strategic pricing and marketing",
        "High-quality photography and staging",
        "Extensive buyer network access",
        "Full transaction management"
      ]
    },
    {
      icon: <Key className="h-12 w-12 text-accent" />,
      title: "Rental Services",
      description: "Complete rental solutions for tenants and property owners",
      features: [
        "Tenant screening and placement",
        "Lease agreement preparation",
        "Rental market analysis",
        "Property showing coordination",
        "Move-in/move-out inspections"
      ]
    },
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "Property Management",
      description: "Professional management to maximize your investment returns",
      features: [
        "24/7 tenant support and maintenance",
        "Rent collection and accounting",
        "Regular property inspections",
        "Vendor management and repairs",
        "Detailed financial reporting"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <DollarSign className="h-6 w-6 text-accent" />,
      title: "Property Valuation",
      description: "Accurate market assessments for buying, selling, or refinancing decisions"
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Investor Services",
      description: "Specialized support for real estate investors and portfolio management"
    },
    {
      icon: <Calendar className="h-6 w-6 text-accent" />,
      title: "Property Tours",
      description: "Flexible scheduling for property viewings and virtual tour options"
    },
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "Legal Support",
      description: "Guidance through contracts, documentation, and legal requirements"
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We start with a detailed discussion of your needs, goals, and timeline."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "We create a customized plan tailored to your specific situation and market conditions."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Our team executes the plan with regular updates and transparent communication."
    },
    {
      step: "4",
      title: "Successful Completion",
      description: "We ensure a smooth closing and provide ongoing support for your real estate needs."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions tailored to your needs. From buying and selling
              to management and investment guidance, we're your trusted partner in real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="luxury" className="mt-6">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven approach that ensures success at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth group relative">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support for all your real estate needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth group">
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-white mb-6">
                Why Choose Prime Level Real Estate?
              </h2>
              <div className="space-y-4 text-white/90">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span>15+ years of proven experience in real estate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span>500+ successful transactions completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span>98% client satisfaction rating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span>Licensed and insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span>24/7 customer support and communication</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Contact us today for a free consultation and discover how we can help you achieve your real estate goals.
              </p>
              <div className="space-y-4">
                <Button variant="premium" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
                <Button variant="premium" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary">
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services