import PageHeader from '@/components/PageHeader';
import { openWhatsApp } from '@/lib/whatsapp';
import { openEmail } from '@/lib/email';
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Globe
} from 'lucide-react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Add padding-top to account for fixed navigation
  const pageStyle = {
    paddingTop: '5rem' // 80px to match navigation height
  }

  const founderInfo = {
    phone: "+971504314269",
    email: "imtaz@primelevelrealestate.com",
    website: "www.primelevelrealestate.com",
    founder: "Imtaz Ahmed"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset()
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      details: ["+971504314269"],
      description: "Contact our CEO directly"
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      details: ["imtaz@primelevelrealestate.com"],
      description: "Direct email to our CEO"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Office",
      details: ["123 Business District", "Your City, State 12345"],
      description: "Visit our office location"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're available when you need us"
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Website",
      details: ["www.primelevelrealestate.com"],
      description: "Visit our website for more information"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <PageHeader 
        title="Contact Us"
        subtitle="Ready to take the next step? Get in touch with our expert team today. We're here to answer your questions and help you achieve your real estate goals."
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-8 w-8 text-accent" />
                    <h2 className="text-2xl font-semibold">Send us a Message</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="buying">Buy a Property</option>
                      <option value="selling">Sell a Property</option>
                      <option value="rental">Rental Services</option>
                      <option value="management">Property Management</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your real estate needs or questions..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you with all your real estate needs. Whether you're buying,
                  selling, or just have questions about the market, our experienced team is ready
                  to provide personalized assistance.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-sm font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Google Map Placeholder */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Visit Our Office</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business District<br />
                        Your City, State 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">How quickly can you help me find a property?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The timeline depends on your specific needs and market conditions, but we typically
                  have suitable options to show within 24-48 hours of our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What are your commission rates?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our commission rates are competitive and transparent. We'll discuss all costs
                  upfront during your consultation so there are no surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Do you work with first-time buyers?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Absolutely! We have extensive experience helping first-time buyers navigate
                  the process and offer specialized programs to make homeownership more accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait - the perfect property might be just one call away.
            Contact us today for immediate assistance.
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

export default Contact