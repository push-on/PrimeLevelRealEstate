import { Button } from '@/components/ui/button'
import { Star, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const FeaturedSection = () => {
	return (
		<section className="py-20 bg-primary/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<h2 className="heading-lg mb-6">
							Your Success is our Top Priority
						</h2>
						<div className="space-y-6">
							{[
								{ title: "Expert Market Knowledge", desc: "Our team stays current with market trends and pricing to give you the competitive edge." },
								{ title: "Personalized Service", desc: "Every client receives tailored solutions based on their unique needs and goals." },
								{ title: "Proven Track Record", desc: "With 200+ successful transactions, we have the experience you can trust." }
							].map((item, index) => (
								<motion.div
									key={index}
									className="flex items-start space-x-4"
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
								>
									<div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<div className="w-2 h-2 bg-white rounded-full"></div>
									</div>
									<div>
										<h4 className="font-semibold mb-2">{item.title}</h4>
										<p className="text-muted-foreground">{item.desc}</p>
									</div>
								</motion.div>
							))}
						</div>
						<Link to="/about">
							<Button
								variant="luxury"
								size="lg"
								className="mt-8"
							>
								Learn More About 
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</motion.div>
					<motion.div 
						className="relative"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					>
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
					</motion.div>
				</div>
			</div>
		</section>
	)
}
