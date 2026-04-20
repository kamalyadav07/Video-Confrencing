import { motion } from "framer-motion";
import { Search, PenTool, Wrench, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Requirement Analysis",
    desc: "We audit your spaces, workflows and platforms in detail.",
  },
  {
    icon: PenTool,
    title: "Solution Design & Demo",
    desc: "Custom proposal with live demo of recommended hardware.",
  },
  {
    icon: Wrench,
    title: "Installation & Integration",
    desc: "Certified engineers deploy and configure end-to-end.",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    desc: "Ongoing PAN India SLA-backed support, 365 days.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            A Simple <span className="text-gradient">4-Step Process</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full gradient-cta opacity-20 blur-xl" />
                <div className="relative w-24 h-24 rounded-full gradient-cta flex items-center justify-center shadow-elegant">
                  <s.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary text-primary font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
