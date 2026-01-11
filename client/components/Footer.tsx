import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Chilli Malli
            </h3>
            <p className="text-muted-foreground text-sm">
              Egmore's favorite multi-cuisine restaurant serving authentic South
              Indian, Chinese, Biryani & Seafood delights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} />
              Hours
            </h4>
            <p className="text-muted-foreground text-sm">
              12:00 Noon – 12:00 Midnight
            </p>
            <p className="text-muted-foreground text-sm mt-2">Open all days</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Phone size={18} />
              Contact
            </h4>
            <a
              href="tel:+916374700585"
              className="text-muted-foreground hover:text-primary transition-colors text-sm block mb-2"
            >
              +91 63747 00585
            </a>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <MapPin size={14} />
              3, Gandhi Irwin Road, Egmore, Chennai
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 pb-8">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Chilli Malli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
