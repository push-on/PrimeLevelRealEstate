import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

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

export const TestimonialsSection = () => {
	const ref = React.useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<section ref={ref} className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className={cn(
						"heading-lg mb-6 scroll-hidden",
						isInView && "scroll-show"
					)}>What Our Clients Say</h2>
					<p className={cn(
						"text-xl text-muted-foreground scroll-hidden",
						isInView && "scroll-show",
						isInView && "[transition-delay:200ms]"
					)}>
						Don't just take our word for it - hear from our satisfied clients
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className={cn(
								"hover:shadow-elegant transition-smooth scroll-hidden",
								isInView && "scroll-show",
								isInView && `[transition-delay:${400 + index * 200}ms]`
							)}
						>
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
	)
}
