import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck, MapPin, Award, Building2 } from "lucide-react";
import heroBg from "@/assets/hero-meeting.jpg";
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
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt="Futuristic data center corridor with glowing server racks"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark gradient overlays for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.12_0.06_260)/0.92] via-[oklch(0.14_0.08_258)/0.78] to-[oklch(0.14_0.08_258)/0.45]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.10_0.05_260)/0.85] via-transparent to-[oklch(0.10_0.05_260)/0.55]" />

      {/* Glow accents */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-glow/20 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-8 text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
            Enterprise AV & Conferencing Specialists
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02]">
            Transform Your Meeting Rooms into{" "}
            <span className="bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent">
              Smart Collaboration Hubs
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            End-to-end Video Conferencing & Meeting Room Solutions for Enterprises, Corporates & Government Projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ContactDialog
              defaultTitle="Get a Free Consultation"
              trigger={
                <Button
                  size="lg"
                  className="gradient-cta text-primary-foreground hover:opacity-90 shadow-glow text-base"
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
                  className="border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:text-white text-base"
                >
                  <PlayCircle className="w-5 h-5 mr-2" /> Book Live Demo
                </Button>
              }
            />
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-start gap-2 text-sm text-white/85 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-3"
              >
                <t.icon className="w-4 h-4 text-primary-glow flex-shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 hidden lg:flex flex-col gap-4"
        >
          <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-elegant">
            <div className="text-5xl font-display font-bold bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              5000+
            </div>
            <div className="text-sm text-white/75 font-medium mt-1">Rooms Deployed Across India</div>
          </div>
          <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-elegant">
            <div className="text-5xl font-display font-bold bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              15+ yrs
            </div>
            <div className="text-sm text-white/75 font-medium mt-1">Industry Experience</div>
          </div>
          <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-elegant">
            <div className="text-5xl font-display font-bold bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-sm text-white/75 font-medium mt-1">PAN India Support</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
