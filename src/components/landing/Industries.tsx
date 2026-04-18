import { motion } from "framer-motion";

const industries = [
  {
    name: "Corporate Offices",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Manufacturing Plants",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
  },

  {
    name: "Educational Institutions",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Government Projects",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "IT & Tech Companies",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
  },
];

export function Industries() {
  // Duplicate the industries array for seamless looping
  const marqueeIndustries = [...industries, ...industries];
  return (
    <section id="industries" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">Every Industry</span>
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-4">
            {marqueeIndustries.map((ind, i) => (
              <motion.div
                key={ind.name + i}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/40 hover:shadow-soft transition-all min-w-[180px]"
              >
                <div
                  className="w-14 h-14 mx-auto rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:gradient-cta transition-all border-2 border-primary/30"
                >
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="font-display font-semibold text-sm">{ind.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
