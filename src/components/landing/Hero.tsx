import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Award, Globe, Phone, Mail, Sparkles } from "lucide-react";
import { ContactDialog } from "@/components/landing/ContactDialog";
import heroMeetingRoom from "@/assets/hero-meeting-room.jpg";

const partners = ["Cisco", "Polycom", "Logitech", "Zoapi", "Barco"];
const highlights = ["30 Years Experience", "5000+ Installations", "PAN India Support"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden isolate"
      style={{ backgroundColor: "#0a0a0f" }} // Explicit dark background
    >
      {/* Glow accents */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 opacity-[0.18] grid-pattern pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-10 items-center lg:min-h-[720px]">
          {/* Left: Text Content - NOW VISIBLE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center h-full"
          >
            {/* Badge - dark background with light text */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 text-xs font-semibold mb-6 border border-blue-400/30 w-fit shadow-[0_12px_30px_rgba(37,99,235,0.12)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Enterprise AV & Conferencing Specialists
            </div>

            {/* Heading - DARK BACKGROUND WITH LIGHT TEXT */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white">
              Transform Your Meeting Rooms into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Smart Collaboration Hubs
              </span>
            </h1>

            {/* Subheading - LIGHT GRAY FOR READABILITY */}
            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
              End-to-end Video Conferencing & Meeting Room Solutions for Enterprises and
              Corporates.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 max-w-2xl">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>

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

            {/* Partner badges */}
            <div className="mt-12 w-full max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-sm">
                <Award className="h-4 w-4 text-blue-400" />
                Technology Partners
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <a
                href="tel:+919811021810"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-cyan-300" />
                +91 98110 21810
              </a>
              <a
                href="mailto:query@compton.in"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                query@compton.in
              </a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <div className="flex justify-center items-center w-full h-full mt-8 lg:mt-0 lg:self-stretch">
            <div className="relative w-full max-w-[820px] mx-auto lg:mr-0 lg:h-full flex items-center">
              <div className="absolute -inset-6 bg-blue-500/20 rounded-[2.25rem] blur-2xl opacity-70" />
              <div className="absolute inset-x-10 -top-5 h-24 rounded-full bg-cyan-300/10 blur-3xl" />
              <img
                src={heroMeetingRoom}
                alt="Modern video conferencing room with a large collaboration display"
                className="relative w-full h-auto lg:h-full rounded-[2.25rem] shadow-2xl object-cover border border-white/20"
                style={{ maxHeight: 680, objectFit: "cover" }}
              />
              <div className="absolute left-5 right-5 bottom-5 rounded-[24px] border border-white/15 bg-slate-950/70 p-5 text-white backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.3)] md:left-auto md:right-6 md:max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
                  Designed For Performance
                </p>
                <p className="mt-2 text-xl font-semibold leading-snug">
                  High-clarity collaboration rooms with premium AV integration.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200/85">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    Smart displays
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    Video bars
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    Room control
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    Deployment support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
