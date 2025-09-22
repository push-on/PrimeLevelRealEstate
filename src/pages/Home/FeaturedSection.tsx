import { Button } from '@/components/ui/button'
import { Star, ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

export const FeaturedSection = () => {
	const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })
	return (
		<section ref={ref} className="py-20 bg-primary/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className={cn(
						"scroll-hidden left",
						isInView && "scroll-show"
					)}>
						<h2 className="heading-lg mb-6">
							Your Success is our Top Priority
						</h2>
						<div className="space-y-6">
							{[
								{ title: "Expert Market Knowledge", desc: "Our team stays current with market trends and pricing to give you the competitive edge.", delay: 200 },
								{ title: "Personalized Service", desc: "Every client receives tailored solutions based on their unique needs and goals.", delay: 400 },
								{ title: "Proven Track Record", desc: "With 500+ successful transactions, we have the experience you can trust.", delay: 600 }
							].map((item, index) => (
								<div
									key={index}
									className={cn(
										"flex items-start space-x-4 scroll-hidden",
										isInView && "scroll-show",
										isInView && `[transition-delay:${item.delay}ms]`
									)}
								>
									<div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<div className="w-2 h-2 bg-white rounded-full"></div>
									</div>
									<div>
										<h4 className="font-semibold mb-2">{item.title}</h4>
										<p className="text-muted-foreground">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
						<Button
							variant="luxury"
							size="lg"
							className={cn(
								"mt-8 scroll-hidden",
								isInView && "scroll-show",
								isInView && "[transition-delay:800ms]"
							)}
						>
							Learn More About Us
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
					<div className={cn(
						"relative scroll-hidden right",
						isInView && "scroll-show"
					)}>
						<div className="bg-card rounded-2xl p-8 shadow-elegant">
							<div className="text-center">
								<div className={cn(
									"text-4xl font-bold text-accent mb-2 scroll-hidden",
									isInView && "scroll-show",
									isInView && "[transition-delay:200ms]"
								)}>98%</div>
								<p className={cn(
									"text-muted-foreground mb-6 scroll-hidden",
									isInView && "scroll-show",
									isInView && "[transition-delay:300ms]"
								)}>Client Satisfaction Rate</p>
								<div className={cn(
									"flex justify-center space-x-1 mb-4 scroll-hidden",
									isInView && "scroll-show",
									isInView && "[transition-delay:400ms]"
								)}>
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-accent text-accent" />
									))}
								</div>
								<p className={cn(
									"text-sm text-muted-foreground scroll-hidden",
									isInView && "scroll-show",
									isInView && "[transition-delay:500ms]"
								)}>
									Based on 500+ client reviews
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
