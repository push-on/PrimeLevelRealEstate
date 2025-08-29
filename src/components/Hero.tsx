import { Button } from '@/components/ui/button'
import { Play, ArrowRight } from 'lucide-react'
import heroImage from '@/assets/hero-property.jpg'
import CountUp from './CountUp'
import ShinyText from './ShinyText'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className=" relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full ">
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accent font-medium animate-[fade-up_0.5s_ease_forwards_0.1s] opacity-0 text-center sm:text-left">
              Your Next Move Starts Here
            </p>

            <h1 className="capitalize text-7xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.1] font-playfair font-light text-white text-center sm:text-left">
              <span className="block opacity-0 animate-[fade-up_0.5s_ease_forwards_0.2s]">Find your</span>
              <span className="block opacity-0 animate-[fade-up_0.5s_ease_forwards_0.3s]">
                <span className="font-playfair italic text-accent">perfect</span> spot
              </span>
            </h1>

            <p className="text-balance text-base md:text-xl text-gray-200 max-w-2xl leading-relaxed opacity-0 animate-[fade-up_0.5s_ease_forwards_0.4s] text-center sm:text-left">
              Discover exceptional properties crafted for generations to come. Expert guidance for your dream home journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start opacity-0 animate-[fade-up_0.5s_ease_forwards_0.5s]">
              <Button
                variant="luxury"
                size="default"
                className="group h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base tracking-wider hover:bg-accent/90"
              >
                View Properties
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110" />
              </Button>

              <Button
                variant="outline"
                size="default"
                className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base tracking-wider text-white border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30"
              >
                <ShinyText highlightColor='hsla(0, 0.00%, 0.00%, 0.36)' speedSec={6} overlayOpacity={0.9}>Let's Connect</ShinyText>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 lg:gap-x-16 gap-y-10 mt-16 border-t border-white/10 pt-10 opacity-0 animate-[fade-up_0.5s_ease_forwards_0.6s]">
          <div className="text-center">
            <div className="text-4xl font-medium text-accent">
              <CountUp end={500} suffix="+" />
            </div>
            <div className="text-sm text-white/70 mt-2 uppercase tracking-[0.15em]">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-medium text-accent">
              <CountUp end={15} suffix="+" />
            </div>
            <div className="text-sm text-white/70 mt-2 uppercase tracking-[0.15em]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-medium text-accent">
              <CountUp end={98} suffix="%" />
            </div>
            <div className="text-sm text-white/70 mt-2 uppercase tracking-[0.15em]">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-medium text-accent">
              <CountUp end={24} />/7
            </div>
            <div className="text-sm text-white/70 mt-2 uppercase tracking-[0.15em]">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero