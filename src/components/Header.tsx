import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import logo from "../assets/logo.jpg"
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#about' },
  { label: 'What We Do', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-background/40 backdrop-blur-md shadow-lg py-3 '
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        
        <a href="#home" className="flex items-center gap-2 group">
          <div className={` rounded-full transition-all duration-300 ${
            isScrolled ? 'bg-primary' : 'bg-primary-foreground/20 backdrop-blur-sm'
          }`}>
             <img 
              src={logo} className={`w-10 h-10 transition-colors ${
              isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'
            }`} />
          </div>
          <span className={`font-display text-xl font-bold transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary'
          }`}>
            Overseas Voyages
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-foreground/80 hover:text-primary' 
                  : 'text-primary/90 hover:text-primary-foreground'
              } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'after:bg-primary' : 'after:bg-primary-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
