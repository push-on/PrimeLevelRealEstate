import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const contactInfo = {
		phone: "+971544887771",
		email: "info@primelevelrealestate.com",
		website: "www.primelevelrealestate.com"
	}

	const quickLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/services', label: 'Services' },
		{ path: '/contact', label: 'Contact' }
	]

	const services = [
		'Residential Properties',
		'Commercial Properties',
		'Property Management',
		'Real Estate Consulting',
		'Investment Advisory'
	]

	return (
		<footer className="bg-card text-card-foreground border-t">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<Link to="/" className="block">
							<img
								src="/logo.svg"
								alt="Prime Level Real Estate"
								className="h-12 w-auto"
							/>
						</Link>
						<p className="text-sm text-muted-foreground mt-4">
							Prime Level Real Estate is your trusted partner in finding the perfect property.
							We provide exceptional real estate services with a focus on client satisfaction.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className="text-sm text-muted-foreground hover:text-accent transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Our Services</h3>
						<ul className="space-y-2">
							{services.map((service) => (
								<li
									key={service}
									className="text-sm text-muted-foreground"
								>
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Contact Us</h3>
						<ul className="space-y-3">
							<li className="flex items-center space-x-3 text-sm text-muted-foreground">
								<Phone className="h-4 w-4" />
								<span>{contactInfo.phone}</span>
							</li>
							<li className="flex items-center space-x-3 text-sm text-muted-foreground">
								<Mail className="h-4 w-4" />
								<a
									href={`mailto:${contactInfo.email}`}
									className="hover:text-accent transition-colors"
								>
									{contactInfo.email}
								</a>
							</li>
							<li className="flex items-center space-x-3 text-sm text-muted-foreground">
								<Globe className="h-4 w-4" />
								<a
									href={`https://${contactInfo.website}`}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-accent transition-colors"
								>
									{contactInfo.website}
								</a>
							</li>
						</ul>

						{/* Social Links */}
						<div className="mt-6">
							<div className="flex space-x-4">
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors"
								>
									<Facebook className="h-5 w-5" />
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors"
								>
									<Instagram className="h-5 w-5" />
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors"
								>
									<Linkedin className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 pt-8 border-t border-border">
					<p className="text-center text-sm text-muted-foreground">
						© {currentYear} Prime Level Real Estate. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
