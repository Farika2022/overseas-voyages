import { Plane, Heart } from 'lucide-react';
import logo from "../assets/logo.jpg"
import logo1 from "../assets/logo1.jpg"
const footerLinks = {
  company: [
    { label: 'Who We Are', href: '#about' },
    { label: 'What We Do', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Sustainability', href: '#sustainability' },
  ],
  destinations: [
    { label: 'Europe', href: '#destinations' },
    { label: 'Asia', href: '#destinations' },
    { label: 'Africa', href: '#destinations' },
    { label: 'Americas', href: '#destinations' },
  ],
  services: [
    { label: 'Eco-Tourism', href: '#services' },
    { label: 'MICE', href: '#services' },
    { label: 'Cruises', href: '#services' },
    { label: 'Adventure', href: '#services' },
  ],
};
 
const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-full ">
               <img 
              src={logo1}className="w-25 h-20 " />
              </div>
             
            </a>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Promoting new & emerging destinations while championing sustainable travel. We connect travelers with trusted suppliers worldwide.
            </p>
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Overseas Voyages. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for sustainable travel
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
