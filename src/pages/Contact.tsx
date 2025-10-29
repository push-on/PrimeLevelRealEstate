import PageHeader from '@/components/PageHeader'
import { openWhatsApp } from '@/lib/whatsapp'
import { openEmail } from '@/lib/email'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { sendEmail } from '@/lib/emailService'
import {
  Phone,
  Mail,
  User,
  MessageSquare,
} from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.enum(['buying', 'selling', 'rental', 'management', 'consultation']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: undefined,
      message: ''
    }
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      await sendEmail(data)

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      })

      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <PageHeader
        title="Contact Us"
        subtitle="Ready to take the next step? Get in touch with our expert team today. We're here to answer your questions and help you achieve your real estate goals."
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-8 w-8 text-accent" />
                    <h2 className="text-2xl font-semibold">Send us a Message</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        {...register('fullName')}
                        placeholder="Enter your full name"
                        className="pl-10"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-10"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        {...register('phone')}
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      {...register('service')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="buying">Buy a Property</option>
                      <option value="selling">Sell a Property</option>
                      <option value="rental">Rental Services</option>
                      <option value="management">Property Management</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                    {errors.service && (
                      <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      {...register('message')}
                      placeholder="Tell us about your real estate needs or questions..."
                      className="min-h-[120px]"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                  </div>
                </form>
              </CardContent>
            </Card>
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
            <Button
              variant="luxury"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => openWhatsApp()}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact