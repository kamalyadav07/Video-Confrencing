import { motion } from "framer-motion";

const clients = ["Nestle", "Bajaj", "Panacea", "IIT Delhi", "Govt. of India", "Tata", "HDFC", "Wipro"];

export function Clients() {
  return (
    <section className="py-20 bg-surface-soft border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Social Proof</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by <span className="text-gradient">Leading Brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-20 rounded-xl bg-card border border-border flex items-center justify-center font-display font-bold text-primary-deep text-lg hover:shadow-soft hover:border-primary/30 transition-all"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
