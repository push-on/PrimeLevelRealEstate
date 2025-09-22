import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Users, Award, MapPin } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

const services = [
	{
		icon: <Home className="h-8 w-8 text-accent" />,
		title: "Buy Properties",
		description: "Find your dream home with our extensive property listings and expert guidance.",
		link: "/contact?service=buying"
	},
	{
		icon: <Users className="h-8 w-8 text-accent" />,
		title: "Sell Properties",
		description: "Get the best value for your property with our proven marketing strategies.",
		link: "/contact?service=selling"
	},
	{
		icon: <Award className="h-8 w-8 text-accent" />,
		title: "Property Management",
		description: "Professional management services to maximize your investment returns.",
		link: "/contact?service=management"
	},
	{
		icon: <MapPin className="h-8 w-8 text-accent" />,
		title: "Rental Services",
		description: "Find the perfect rental property or manage your rental investments.",
		link: "/contact?service=rental"
	}
]

export const CompanyIntroduction = () => {
	const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })

	return (
		<section ref={ref} className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className={cn(
						"heading-lg text-foreground mb-6 scroll-hidden",
						isInView && "scroll-show"
					)}>
						Welcome to Prime Level Real Estate
					</h2>
					<p className={cn(
						"text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-hidden",
						isInView && "scroll-show [transition-delay:200ms]"
					)}>
						With over 15 years of experience in real estate, we're dedicated to helping you
						achieve your property goals. Whether you're buying, selling, or investing, our
						expert team provides personalized service and market insights to ensure success.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<Link to={service.link} key={index}>
							<Card className={cn(
								"hover:shadow-elegant transition-smooth group h-full scroll-hidden",
								isInView && "scroll-show",
								isInView && `[transition-delay:${400 + index * 100}ms]`
							)}>
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
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
