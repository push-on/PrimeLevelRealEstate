import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const contactInfo = {
		phone: "+97142238211",
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

	const handleLinkClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<footer className="bg-card text-card-foreground border-t">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<motion.div 
						className="space-y-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<Link to="/" onClick={handleLinkClick} className="block">
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
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
					>
						<h3 className="font-semibold text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link, index) => (
								<motion.li 
									key={link.path}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + index * 0.05 }}
								>
									<Link
										to={link.path}
										onClick={handleLinkClick}
										className="text-sm text-muted-foreground hover:text-accent transition-colors"
									>
										{link.label}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					>
						<h3 className="font-semibold text-lg mb-4">Our Services</h3>
						<ul className="space-y-2">
							{services.map((service, index) => (
								<motion.li
									key={service}
									className="text-sm text-muted-foreground"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + index * 0.05 }}
								>
									{service}
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
					>
						<h3 className="font-semibold text-lg mb-4">Contact Us</h3>
						<ul className="space-y-3">
							<motion.li 
								className="flex items-center space-x-3 text-sm text-muted-foreground"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
							>
								<Phone className="h-4 w-4" />
								<span>{contactInfo.phone}</span>
							</motion.li>
							<motion.li 
								className="flex items-center space-x-3 text-sm text-muted-foreground"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
							>
								<Mail className="h-4 w-4" />
								<a
									href={`mailto:${contactInfo.email}`}
									className="hover:text-accent transition-colors"
								>
									{contactInfo.email}
								</a>
							</motion.li>
							<motion.li 
								className="flex items-center space-x-3 text-sm text-muted-foreground"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.4, ease: "easeOut", delay: 0.45 }}
							>
								<Globe className="h-4 w-4" />
								<a
									href={`https://${contactInfo.website}`}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-accent transition-colors"
								>
									{contactInfo.website}
								</a>
							</motion.li>
						</ul>

						{/* Social Links */}
						<motion.div 
							className="mt-6"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
						>
							<div className="flex space-x-4">
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transition-transform duration-300"
								>
									<Facebook className="h-5 w-5" />
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transition-transform duration-300"
								>
									<Instagram className="h-5 w-5" />
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transition-transform duration-300"
								>
									<Linkedin className="h-5 w-5" />
								</a>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Copyright */}
				<motion.div 
					className="mt-12 pt-8 border-t border-border"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
				>
					<p className="text-center text-sm text-muted-foreground">
						© {currentYear} Prime Level Real Estate. All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	)
}

export default Footer
