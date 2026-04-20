const clients = [
  { name: "Nestle", slug: "nestle" },
  { name: "Bajaj", slug: "bajaj" },
  { name: "Tata", slug: "tata" },
  { name: "HDFC Bank", slug: "hdfcbank" },
  { name: "Wipro", slug: "wipro" },
  { name: "Infosys", slug: "infosys" },
  { name: "Reliance", slug: "reliance" },
  { name: "ICICI Bank", slug: "icicibank" },
  { name: "Mahindra", slug: "mahindra" },
  { name: "L&T", slug: "larsenandtoubro" },
  { name: "SBI", slug: "sbi" },
  { name: "Adani", slug: "adani" },
];

export function Clients() {
  // Duplicate list for seamless infinite scroll
  const loop = [...clients, ...clients];

  return (
    <section className="py-20 bg-surface-soft border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Social Proof
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by <span className="text-gradient">Leading Brands</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Powering meeting rooms for India's most respected enterprises, institutions, and
            government bodies.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-soft to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-soft to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((c, i) => (
            <div
              key={`${c.slug}-${i}`}
              className="flex-shrink-0 w-44 h-24 rounded-2xl bg-card border border-border shadow-soft flex flex-col items-center justify-center gap-2 px-4 hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <img
                src={`https://cdn.simpleicons.org/${c.slug}`}
                alt={`${c.name} logo`}
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-display font-semibold text-primary-deep text-sm">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
