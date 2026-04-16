import { motion } from "framer-motion";
import { Building, Factory, Stethoscope, GraduationCap, Landmark, Cpu } from "lucide-react";

const industries = [
  { icon: Building, name: "Corporate Offices" },
  { icon: Factory, name: "Manufacturing Plants" },
  { icon: Stethoscope, name: "Hospitals" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: Landmark, name: "Government Projects" },
  { icon: Cpu, name: "IT & Tech Companies" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">Every Industry</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/40 hover:shadow-soft transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-3 group-hover:gradient-cta transition-all">
                <ind.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="font-display font-semibold text-sm">{ind.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
