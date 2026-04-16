import { motion } from "framer-motion";
import videoBar from "@/assets/product-videobar.jpg";
import panel from "@/assets/product-panel.jpg";
import phone from "@/assets/product-phone.jpg";

const products = [
  { img: videoBar, title: "Poly Studio Series", desc: "Premium video bars with intelligent framing." },
  { img: panel, title: "Interactive Flat Panels", desc: "4K touchscreens for collaboration & whiteboarding." },
  { img: phone, title: "Conference Phones & Mics", desc: "Beamforming arrays with HD voice clarity." },
];

const more = ["Room Scheduling Systems", "AI-Based Cameras", "Wireless Presentation Hubs", "Acoustic Treatment"];

export function ProductStack() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Product Stack</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Top <span className="text-gradient">Enterprise-Grade</span> Devices
          </h2>
          <p className="mt-4 text-muted-foreground">Customized based on your room size & requirement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {more.map((m) => (
            <span key={m} className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-primary/10">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
