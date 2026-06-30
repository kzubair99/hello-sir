import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Contact Bar - Hidden on small screens */}
      <div className="hidden md:block w-full bg-slate-900 text-white text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:9873630903" 
              className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors"
              id="top-phone"
            >
              <Phone size={13} className="text-blue-500" />
              <span>+91 9873630903</span>
            </a>
            <a 
              href="mailto:kzubair99@gmail.com" 
              className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors"
              id="top-email"
            >
              <Mail size={13} className="text-blue-500" />
              <span>kzubair99@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Clock size={13} className="text-blue-500" />
              <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
            </div>
            <span className="text-blue-500 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full text-[10px]">
              Govt Registered Consultant
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3 border-b border-blue-50' 
            : 'bg-white/95 backdrop-blur-md md:bg-white/90 md:backdrop-blur-md py-4 md:py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Brand Title */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="cursor-pointer group select-none flex items-center space-x-3"
            id="brand-logo-btn"
          >
            <div className="bg-blue-600 text-white p-2.5 rounded-lg font-bold shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors flex flex-col justify-center items-center leading-none">
              <span className="text-lg font-extrabold tracking-wider">Z</span>
              <span className="text-[9px] uppercase font-semibold">Tax</span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                  ZUBAIR &amp; ASSOCIATES
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 text-xs text-blue-600 font-semibold tracking-wide leading-none mt-1">
                <span>M. ZUBAIR</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-medium">Business &amp; Tax Consultant</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-md hover:bg-blue-50/50 transition-all duration-150"
                id={`nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
            <div className="pl-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all duration-150"
                id="header-cta"
              >
                Free Consultation
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a 
              href="tel:9873630903" 
              className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              title="Call Now"
              id="mobile-nav-call"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`lg:hidden w-full bg-white border-b border-blue-50 shadow-lg absolute left-0 right-0 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="px-4 flex flex-col space-y-1.5 pb-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              id={`mob-nav-${item.id}`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-3 px-4 border-t border-slate-100">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg text-sm font-semibold shadow-md transition-colors"
              id="mob-header-cta"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
