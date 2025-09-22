import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ProfileImage from "@/assets/profile.webp";

const MeetTheAgent = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={ProfileImage}
              alt="Agent Headshot"
              className="w-full max-w-md object-cover "
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent font-medium mb-2">
              Founder & CEO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">
              Meet Imtaz Ahmed
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With a passion for real estate and a commitment to his clients, Imtaz is dedicated to helping you find your perfect home. He brings over a decade of experience and a deep understanding of the luxury market to every transaction.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              His goal is to make your buying or selling process as smooth and stress-free as possible. He believes in clear communication, transparency, and building lasting relationships with his clients.
            </p>
            <Button size="lg" variant="luxury" onClick={() => window.location.assign('/about')}>
              Learn More About Imtaz <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAgent;
