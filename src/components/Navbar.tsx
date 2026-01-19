import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import hackifyLogo from '@/assets/hackify-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'services', label: 'Expertises' },
    { id: 'results', label: 'Résultats' },
    { id: 'why', label: 'Pourquoi nous' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/30' : 'bg-transparent'
    }`}>
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={hackifyLogo} 
              alt="Hackify" 
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-primary py-2.5 px-6 text-sm"
            >
              Réserver un audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary py-2.5 px-6 text-sm text-center mt-2"
              >
                Réserver un audit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;