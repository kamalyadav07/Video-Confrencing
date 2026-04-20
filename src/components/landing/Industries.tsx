import { motion } from "framer-motion";

const industries = [
  {
    name: "Corporate Offices",
    description: "Modern conference solutions for executive boardrooms and collaboration spaces",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Manufacturing Plants",
    description: "Ruggedized solutions for industrial environments and remote site management",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hospitals",
    description: "HIPAA-compliant telemedicine and remote consultation systems",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Educational Institutions",
    description: "Interactive learning spaces for universities and training centers",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Government Projects",
    description: "Secure, compliant communication systems for government organizations",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "IT & Tech Companies",
    description: "Advanced collaboration tools for agile teams and tech workspaces",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">Every Industry</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}