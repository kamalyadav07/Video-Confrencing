import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck, MapPin, Award, Building2, Globe } from "lucide-react";
import { ContactDialog } from "@/components/landing/ContactDialog";

const trust = [
  { icon: Building2, label: "5000+ Projects Delivered" },
  { icon: Award, label: "Trusted by Nestle, Bajaj & More" },
  { icon: MapPin, label: "PAN India Deployment" },
  { icon: ShieldCheck, label: "Certified Tech Partners" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden isolate"
      style={{ backgroundColor: '#0a0a0f' }} // Explicit dark background
    >
      {/* Glow accents */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content - NOW VISIBLE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-center h-full"
          >
            {/* Badge - dark background with light text */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 text-xs font-semibold mb-6 border border-blue-400/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Enterprise AV & Conferencing Specialists
            </div>

            {/* Heading - DARK BACKGROUND WITH LIGHT TEXT */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white">
              Transform Your Meeting Rooms into{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Smart Collaboration Hubs
              </span>
            </h1>

            {/* Subheading - LIGHT GRAY FOR READABILITY */}
            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
              End-to-end Video Conferencing & Meeting Room Solutions for Enterprises, Corporates & Government Projects.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <ContactDialog
                defaultTitle="Get a Free Consultation"
                trigger={
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg text-base px-6 border-0"
                  >
                    Get Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                }
              />
              <ContactDialog
                defaultTitle="Book a Live Demo"
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-400/40 bg-blue-500/10 backdrop-blur-md text-white hover:bg-blue-500/20 hover:text-white text-base px-6"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" /> Book Live Demo
                  </Button>
                }
              />
            </div>

            {/* Third button */}
            <div className="mt-3">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-500/40 bg-blue-600/10 backdrop-blur-md text-white hover:bg-blue-600/20 hover:text-white text-base px-6"
              >
                <a href="https://www.compton.in" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 mr-2" /> Visit Our Website
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
              {trust.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2.5"
                >
                  <t.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="font-medium leading-tight">{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <div className="flex justify-center items-center w-full h-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl opacity-60" />
              <img
                src="https://www.presentationpeople.in/wp-content/uploads/2021/09/Optimized-business-people-wearing-masks-coronavirus-meeting-768x537.jpg"
                alt="Business professionals in a collaborative meeting"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border border-white/20"
                style={{ maxHeight: 420, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}