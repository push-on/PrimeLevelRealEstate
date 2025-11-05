import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Homeowner",
		content: "Prime Level Real Estate helped me find my perfect home. Their team was professional and made the process seamless. I couldn't be happier with my new property!",
		rating: 5,
		image: "https://randomuser.me/api/portraits/women/1.jpg"
	},
	{
		name: "Michael Chen",
		role: "Property Investor",
		content: "Excellent service and market knowledge. They helped me make profitable investment decisions and their insights were invaluable to my portfolio growth.",
		rating: 5,
		image: "https://randomuser.me/api/portraits/men/2.jpg"
	},
	{
		name: "Emily Rodriguez",
		role: "First-time Buyer",
		content: "As a first-time buyer, I was nervous, but they guided me through every step with patience and expertise. Highly recommended for anyone buying their first home!",
		rating: 5,
		image: "https://randomuser.me/api/portraits/women/3.jpg"
	},
	{
		name: "David Thompson",
		role: "Property Seller",
		content: "Sold my property above asking price in record time. Their marketing strategy and negotiation skills are top-notch. True professionals in every sense!",
		rating: 5,
		image: "https://randomuser.me/api/portraits/men/4.jpg"
	},
	{
		name: "Priya Sharma",
		role: "Real Estate Investor",
		content: "Working with Prime Level has been a game-changer for my investment strategy. Their market analysis and property recommendations have consistently delivered excellent returns.",
		rating: 5,
		image: "https://randomuser.me/api/portraits/women/5.jpg"
	},
	{
		name: "James Wilson",
		role: "Homebuyer",
		content: "From start to finish, the experience was outstanding. They understood exactly what I was looking for and found me the perfect home within my budget. Could not ask for better service!",
		rating: 5,
		image: "https://randomuser.me/api/portraits/men/6.jpg"
	}
]

export const TestimonialsSection = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 4000, stopOnInteraction: true })
	)

	return (
		<section className="py-20 bg-gradient-to-b from-background to-primary/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h2 className="heading-lg mb-6">What Our Clients Say</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Don't just take our word for it - hear from our satisfied clients
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
				>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[plugin.current]}
						className="w-full"
						onMouseEnter={() => plugin.current.stop()}
						onMouseLeave={() => plugin.current.play()}
					>
						<CarouselContent className="-ml-4">
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
									<Card className="h-full border-none shadow-elegant hover:shadow-2xl transition-all duration-300 bg-card">
										<CardContent className="p-8 flex flex-col h-full">
											<div className="mb-6">
												<Quote className="h-12 w-12 text-accent/20" />
											</div>
											
											<div className="flex space-x-1 mb-4">
												{[...Array(testimonial.rating)].map((_, i) => (
													<Star key={i} className="h-5 w-5 fill-accent text-accent" />
												))}
											</div>
											
											<p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-base">
												"{testimonial.content}"
											</p>
											
											<div className="flex items-center gap-4 mt-auto pt-6 border-t">
												<div className="relative">
													<div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/20">
														<img
															src={testimonial.image}
															alt={testimonial.name}
															className="w-full h-full object-cover"
														/>
													</div>
												</div>
												<div>
													<div className="font-semibold text-foreground text-lg">
														{testimonial.name}
													</div>
													<div className="text-sm text-muted-foreground">
														{testimonial.role}
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex justify-center gap-4 mt-8">
							<CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
							<CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
						</div>
					</Carousel>
				</motion.div>
			</div>
		</section>
	)
}
