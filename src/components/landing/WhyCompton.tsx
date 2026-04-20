import { motion } from "framer-motion";
import { CalendarClock, CheckCircle2, Wrench, Map, Briefcase } from "lucide-react";

const reasons = [
  { icon: CalendarClock, title: "15+ Years Industry Experience", value: "15+" },
  { icon: CheckCircle2, title: "Successful Installations", value: "5000+" },
  { icon: Wrench, title: "End-to-End Execution", value: "100%" },
  { icon: Map, title: "PAN India Support Team", value: "28+" },
  { icon: Briefcase, title: "Enterprise & Govt Expertise", value: "Pro" },
];

export function WhyCompton() {
  return (
    <section id="why" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Compton
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="text-gradient">Compton Computers?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-soft transition-all"
            >
              <r.icon className="w-7 h-7 mx-auto text-primary mb-3" />
              <div className="text-3xl font-display font-bold text-gradient">{r.value}</div>
              <div className="mt-1 text-xs text-muted-foreground font-medium leading-tight">
                {r.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
