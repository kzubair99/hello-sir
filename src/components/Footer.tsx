import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-10">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-blue-600 text-white p-2 rounded font-extrabold text-sm shadow-md">
                Z
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                  ZUBAIR &amp; ASSOCIATES
                </h4>
                <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">
                  M. ZUBAIR &bull; Business &amp; Tax Consultant
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Empowering Indian business entities, partnerships, and individual taxpayers with premium, transparent, and error-free regulatory compliance and tax saving structures.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <ShieldCheck size={16} className="text-blue-500" />
              <span>Government Registered Tax Advisory Firm</span>
            </div>
          </div>

          {/* Quick links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose-us')} 
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Pillars
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services mapping (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 hover:underline">
                  Income Tax Return Filing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 hover:underline">
                  GST Registration &amp; Filing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 hover:underline">
                  Company Incorporation (Pvt Ltd)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 hover:underline">
                  Statutory &amp; Tax Audits
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 hover:underline">
                  MSME &amp; FSSAI License
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact summary (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Emergency Contact
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-blue-500 shrink-0" />
                <a href="tel:9873630903" className="hover:text-white transition-colors">
                  +91 9873630903
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-500 shrink-0" />
                <a href="mailto:kzubair99@gmail.com" className="hover:text-white transition-colors">
                  kzubair99@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Delhi NCR &amp; Digital PAN-India Consultations</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-500 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base bottom details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-slate-500">
          <p className="text-center md:text-left">
            &copy; {currentYear} Zubair &amp; Associates. All rights reserved. Registered Business &amp; Tax Consultancy.
          </p>
          <p className="text-center md:text-right">
            Disclaimer: Information provided is for legal filing and reference purposes. Developed under active regulatory protocols.
          </p>
        </div>

      </div>
    </footer>
  );
}
