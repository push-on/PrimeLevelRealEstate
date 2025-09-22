import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { openEmail } from '@/lib/email'
import { openWhatsApp } from '@/lib/whatsapp'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

export const CTASection = () => {
	const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })
	return (
		<section ref={ref} className="py-20 bg-primary">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className={cn(
					"heading-lg text-white mb-6 scroll-hidden",
					isInView && "scroll-show"
				)}>
					Ready to Find Your Dream Property?
				</h2>
				<p className={cn(
					"text-xl text-white/90 mb-8 scroll-hidden",
					isInView && "scroll-show",
					isInView && "[transition-delay:200ms]"
				)}>
					Contact us today for a free consultation and let us help you achieve your real estate goals.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						variant="luxury"
						size="lg"
						className={cn(
							"bg-white text-primary hover:bg-white/90 scroll-hidden",
							isInView && "scroll-show",
							isInView && "[transition-delay:400ms]"
						)}
						onClick={openWhatsApp}
					>
						<Phone className="mr-2 h-5 w-5" />
						Call Now
					</Button>
					<Button
						variant="outline-dark"
						size="lg"
						className={cn(
							"border-white text-white hover:bg-white hover:text-primary scroll-hidden",
							isInView && "scroll-show",
							isInView && "[transition-delay:600ms]"
						)}
						onClick={openEmail}
					>
						Schedule Consultation
					</Button>
				</div>
			</div>
		</section>
	)
}
