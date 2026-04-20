import { motion } from "framer-motion";
import { Video, Camera, Monitor, Cast, Cog, Volume2, Check } from "lucide-react";

const solutions = [
  {
    icon: Video,
    title: "Video Conferencing Systems",
    desc: "Zoom, Teams & Google Meet certified rooms — ready out of the box.",
  },
  {
    icon: Camera,
    title: "HD Cameras with AI Tracking",
    desc: "Auto-framing, speaker tracking and intelligent noise cancellation.",
  },
  {
    icon: Monitor,
    title: "Smart Displays & Interactive Panels",
    desc: "4K touch panels for whiteboarding, annotation and presentation.",
  },
  {
    icon: Cast,
    title: "Wireless Presentation",
    desc: "BYOD casting from any device — no cables, no compatibility issues.",
  },
  {
    icon: Cog,
    title: "Conference Room Automation",
    desc: "One-touch lighting, blinds, displays and conferencing control.",
  },
  {
    icon: Volume2,
    title: "Audio Optimization",
    desc: "Beamforming mics and DSP tuning for boardrooms of any size.",
  },
];

const benefits = [
  "Crystal Clear Communication — no lag, no noise",
  "Seamless Integration with all major platforms",
  "One-Touch Meeting Start",
  "Remote + Hybrid Ready Setup",
  "Boost Productivity by 40%+",
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Solution
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Compton <span className="text-gradient">Smart Meeting Room</span> Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We design, deploy & manage fully integrated meeting room ecosystems — engineered for
            clarity, speed and zero friction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 gradient-cta opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-5 shadow-soft">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl gradient-hero p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
                What You Get
              </span>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-primary-foreground">
                Outcomes that actually move the needle.
              </h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-primary-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
