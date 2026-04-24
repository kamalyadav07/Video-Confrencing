export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYkeJ7TDhgV8ZPYsG5c_y5Kyofb4Bb5LKyVmixF1iuewJ6aqZNJ5SNONz&s=10"
                alt="Compton Logo"
                className="w-9 h-9 rounded-lg object-contain bg-white p-1"
              />
              <span className="font-display font-bold text-lg">Compton Computers</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Smart meeting room solutions for enterprises and corporates across India.
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
              <li>
                <a href="tel:+919811021810" className="hover:text-primary-foreground transition-colors">
                  +91 98110 21810
                </a>
              </li>
              <li>
                <a href="mailto:query@compton.in" className="hover:text-primary-foreground transition-colors">
                  query@compton.in
                </a>
              </li>
              <li>
                B-35A, 2nd Floor, Main Road, Hans Raj Sethi Marg, Block B, Kalkaji, New Delhi,
                110019
              </li>
              <li>PAN India Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-sm text-primary-foreground/60 text-center">
          (c) {new Date().getFullYear()} Compton Computers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
