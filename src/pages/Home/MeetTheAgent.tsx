import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import ProfileImage from "@/assets/profile.webp"
import { useNavigate } from "react-router-dom"

const MeetTheAgent = () => {
  const navigate = useNavigate()
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <img
                src={ProfileImage}
                alt="Agent Headshot"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accent font-medium">
              Founder & CEO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-playfair">
              Meet Imtaz Ahmed
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a passion for real estate and a commitment to his clients, Imtaz is dedicated to helping you find your perfect home. He brings over 5 years of experience and a deep understanding of the luxury market to every transaction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              His goal is to make your buying or selling process as smooth and stress-free as possible. He believes in clear communication, transparency, and building lasting relationships with his clients.
            </p>
            <div>
              <Button
                size="lg"
                variant="luxury"
                onClick={() => navigate('/about')}
                className="group"
              >
                Learn More About Imtaz
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheAgent
