import { Button } from "@/components/ui/button";
import { Phone, FileText, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl gradient-hero p-10 md:p-16 overflow-hidden shadow-elegant">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-semibold tracking-wider uppercase">
              Limited Slots This Month
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
              Upgrade Your Meeting Rooms Today
            </h2>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/85">
              Don't let outdated meeting rooms slow your business growth.
              Get a <span className="font-semibold text-primary-foreground">FREE Consultation & Demo</span> from our experts.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-base shadow-glow" asChild>
                <a href="tel:+910000000000">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur text-base" asChild>
                <a href="#contact">
                  <FileText className="w-5 h-5 mr-2" /> Request Quote
                </a>
              </Button>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-base" asChild>
                <a href="#contact">
                  Talk to Our Experts <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80 text-sm">
              <span>✓ No-obligation consultation</span>
              <span>✓ Response within 24 hours</span>
              <span>✓ Custom tailored proposal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
