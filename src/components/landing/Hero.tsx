import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck, MapPin, Award, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-meeting-room.jpg";

const trust = [
  { icon: Building2, label: "5000+ Projects Delivered" },
  { icon: Award, label: "Trusted by Nestle, Bajaj & More" },
  { icon: MapPin, label: "PAN India Deployment" },
  { icon: ShieldCheck, label: "Certified Tech Partners" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full gradient-hero opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6 border border-primary/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Enterprise AV & Conferencing Specialists
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Transform Your Meeting Rooms into{" "}
            <span className="text-gradient">Smart Collaboration Hubs</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            End-to-end Video Conferencing & Meeting Room Solutions for Enterprises, Corporates & Government Projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="gradient-cta text-primary-foreground hover:opacity-90 shadow-elegant text-base" asChild>
              <a href="#contact">Get Free Consultation <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-base" asChild>
              <a href="#contact"><PlayCircle className="w-5 h-5 mr-2" /> Book Live Demo</a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <t.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 gradient-hero opacity-30 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/50">
            <img
              src={heroImg}
              alt="Smart conference room with video conferencing setup"
              width={1920}
              height={1280}
              className="w-full h-auto"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft border border-border p-4 hidden md:block"
          >
            <div className="text-3xl font-display font-bold text-gradient">5000+</div>
            <div className="text-xs text-muted-foreground font-medium">Rooms Deployed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-soft border border-border p-4 hidden md:block"
          >
            <div className="text-3xl font-display font-bold text-gradient">15+ yrs</div>
            <div className="text-xs text-muted-foreground font-medium">Industry Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
