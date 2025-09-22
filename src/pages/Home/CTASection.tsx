import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { openEmail } from '@/lib/email'
import { openWhatsApp } from '@/lib/whatsapp'

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready to Find Your Dream Property?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Contact us today for a free consultation and let us help you achieve your real estate goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="luxury" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90" 
            onClick={openWhatsApp}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button 
            variant="outline-dark" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary" 
            onClick={openEmail}
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
