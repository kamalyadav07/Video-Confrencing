import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

function InfosysLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 36" fill="none" aria-label="Infosys logo" {...props}>
      <text x="70" y="24" textAnchor="middle" fontSize="24" fontWeight="500" fill="#0076CE">
        Infosys
      </text>
    </svg>
  );
}

function RelianceLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 160 36" fill="none" aria-label="Reliance logo" {...props}>
      <text x="80" y="24" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1E3A8A">
        Reliance
      </text>
    </svg>
  );
}

function IciciLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" aria-label="ICICI Bank logo" {...props}>
      <path d="M36 7C26 7 19 14 19 24C19 31 23 36 29 38C27 35 26 31 26 27C26 18 32 10 41 7.5C39.4 7.2 37.9 7 36 7Z" fill="#A01D21" />
      <path d="M45 4C35 4 28 13 28 24C28 31 31 36 36 39C35 35 35 30 35 24C35 14 40 7 49 3.8C47.8 3.9 46.4 4 45 4Z" fill="#D97828" />
      <text x="98" y="27" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1F3C88">
        ICICI Bank
      </text>
    </svg>
  );
}

function MahindraLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 36" fill="none" aria-label="Mahindra logo" {...props}>
      <text x="75" y="14" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1" fill="#D72638">
        rise
      </text>
      <text x="75" y="28" textAnchor="middle" fontSize="22" fontWeight="700" fill="#1F3C88">
        Mahindra
      </text>
    </svg>
  );
}

function LtLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 90 36" fill="none" aria-label="L&T logo" {...props}>
      <text x="45" y="25" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1F4AA8">
        L&amp;T
      </text>
    </svg>
  );
}

function SbiLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 90 40" fill="none" aria-label="SBI logo" {...props}>
      <circle cx="20" cy="20" r="12" fill="#2453A6" />
      <circle cx="20" cy="24" r="3.5" fill="white" />
      <text x="58" y="26" textAnchor="middle" fontSize="22" fontWeight="700" fill="#2453A6">
        SBI
      </text>
    </svg>
  );
}

function AdaniLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 36" fill="none" aria-label="Adani logo" {...props}>
      <text x="60" y="24" textAnchor="middle" fontSize="24" fontWeight="700" fill="#2155A5">
        Adani
      </text>
    </svg>
  );
}

function NestleLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 36" fill="none" aria-label="Nestle logo" {...props}>
      <text x="65" y="24" textAnchor="middle" fontSize="22" fontWeight="600" fill="#8AA0C8">
        Nestle
      </text>
    </svg>
  );
}

function BajajLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 36" fill="none" aria-label="Bajaj logo" {...props}>
      <text x="60" y="24" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1857B6">
        Bajaj
      </text>
    </svg>
  );
}

function TataLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" aria-label="Tata logo" {...props}>
      <ellipse cx="25" cy="14" rx="16" ry="7" stroke="#1E4FA3" strokeWidth="3" />
      <path d="M25 14V28" stroke="#1E4FA3" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 18H35" stroke="#1E4FA3" strokeWidth="3" strokeLinecap="round" />
      <text x="78" y="26" textAnchor="middle" fontSize="22" fontWeight="700" fill="#1E4FA3">
        Tata
      </text>
    </svg>
  );
}

function HdfcLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" aria-label="HDFC Bank logo" {...props}>
      <rect x="8" y="8" width="24" height="24" fill="#163B74" />
      <rect x="12" y="12" width="16" height="16" fill="#E53935" />
      <rect x="17" y="17" width="6" height="6" fill="white" />
      <text x="95" y="26" textAnchor="middle" fontSize="20" fontWeight="700" fill="#163B74">
        HDFC Bank
      </text>
    </svg>
  );
}

function WiproLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" aria-label="Wipro logo" {...props}>
      <circle cx="20" cy="20" r="11" fill="#6F2DBD" opacity="0.15" />
      <circle cx="16" cy="16" r="2.5" fill="#E53935" />
      <circle cx="24" cy="16" r="2.5" fill="#FB8C00" />
      <circle cx="16" cy="24" r="2.5" fill="#43A047" />
      <circle cx="24" cy="24" r="2.5" fill="#1E88E5" />
      <text x="78" y="26" textAnchor="middle" fontSize="22" fontWeight="700" fill="#6F2DBD">
        Wipro
      </text>
    </svg>
  );
}

const clients = [
  { name: "Nestle", logo: NestleLogo },
  { name: "Bajaj", logo: BajajLogo },
  { name: "Tata", logo: TataLogo },
  { name: "HDFC Bank", logo: HdfcLogo },
  { name: "Wipro", logo: WiproLogo },
  { name: "Infosys", logo: InfosysLogo },
  { name: "Reliance", logo: RelianceLogo },
  { name: "ICICI Bank", logo: IciciLogo },
  { name: "Mahindra", logo: MahindraLogo },
  { name: "L&T", logo: LtLogo },
  { name: "SBI", logo: SbiLogo },
  { name: "Adani", logo: AdaniLogo },
];

export function Clients() {
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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-soft to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-soft to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max px-6">
          {loop.map((c, i) => {
            const Logo = c.logo;

            return (
              <div
                key={`${c.name}-${i}`}
                className="flex-shrink-0 w-44 h-24 rounded-2xl bg-card border border-border shadow-soft flex flex-col items-center justify-center gap-2 px-4 hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <Logo className="h-10 w-auto max-w-[120px]" />
                <span className="font-display font-semibold text-primary-deep text-sm">{c.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
