export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary-foreground text-primary flex items-center justify-center font-bold font-display">C</div>
              <span className="font-display font-bold text-lg">Compton Computers</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Smart meeting room solutions for enterprises, corporates and government across India.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Video Conferencing</li>
              <li>Interactive Panels</li>
              <li>Room Automation</li>
              <li>Audio Systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>About</li>
              <li>Industries</li>
              <li>Case Studies</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+91 00000 00000</li>
              <li>hello@compton.in</li>
              <li>PAN India Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-sm text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Compton Computers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
