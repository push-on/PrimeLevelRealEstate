import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl transition-all duration-300 border-b border-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300 relative z-50">
            <img src="/logo.svg" alt="Prime Level Real Estate" className="w-[140px] h-[140px] brightness-0 invert" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium group ${isActive(link.path)
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              size="lg"
              className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base tracking-wider text-white border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 w-12 h-12 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white/10' : 'hover:bg-white/5'}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-[1.1rem] relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
          <div className="relative h-full w-full">
            <div className="flex flex-col h-full justify-center items-center p-8">
              <div className="w-full max-w-md space-y-2">
                {navigationLinks.map((link, index) => (
                  <div
                    key={link.path}
                    className={`transform transition-all duration-300 delay-[${index * 100}ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                      }`}
                  >
                    <Link
                      to={link.path}
                      className={`uppercase relative block py-4 text-5xl tracking-wider transition-all duration-300 
                        ${isActive(link.path)
                          ? 'text-white pl-6 font-bold'
                          : 'text-gray-300 hover:text-white hover:pl-6'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent transform transition-all duration-300 
                        ${isActive(link.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                      />
                      {link.label}
                    </Link>
                  </div>
                ))}

                <div className={`pt-12 transform transition-all duration-300 transition-delay-[400ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <Button
                    variant="luxury"
                    className="w-full text-lg py-6 font-medium tracking-wider relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </div>

                <div className={`pt-8 flex flex-col items-center space-y-4 text-gray-300 transform transition-all duration-300 transition-delay-[500ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="h-5 w-5" /> +1 234 567 890
                  </a>
                  <a href="mailto:info@primelevel.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="h-5 w-5" /> info@primelevel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navigation