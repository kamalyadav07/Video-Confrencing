import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ContactDialog } from "@/components/landing/ContactDialog";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYkeJ7TDhgV8ZPYsG5c_y5Kyofb4Bb5LKyVmixF1iuewJ6aqZNJ5SNONz&s=10"
            alt="Compton Logo"
            className="w-9 h-9 rounded-lg object-contain bg-white p-1"
          />
          <span className="font-display font-bold text-lg tracking-tight">Compton</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a>
          <a href="#industries" className="hover:text-foreground transition-colors">Industries</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#why" className="hover:text-foreground transition-colors">Why Compton</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="tel:+910000000000"><Phone className="w-4 h-4 mr-1" /> Call</a>
          </Button>
          <ContactDialog
            defaultTitle="Book a Live Demo"
            trigger={
              <Button size="sm" className="gradient-cta text-primary-foreground hover:opacity-90 shadow-soft">
                Get Demo
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}
