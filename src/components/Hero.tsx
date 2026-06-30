import { ArrowRight, Phone, ShieldCheck, Award, Star } from 'lucide-react';

export default function Hero() {
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

  return (
    <section 
      id="home" 
      className="relative pt-[120px] md:pt-[170px] pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/40 overflow-hidden"
    >
      {/* Dynamic Background Circles */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-800 text-xs font-semibold tracking-wide select-none">
              <ShieldCheck size={14} className="text-blue-600 animate-pulse" />
              <span>Government Registered Business &amp; Tax Partner</span>
            </div>

            {/* Principal Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Simplify Your Taxes,<br />
                <span className="text-blue-600 relative inline-block mt-1">
                  Grow Your Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-slate-700 mt-2">
                ZUBAIR &amp; ASSOCIATES
              </p>
              <p className="text-md md:text-lg font-medium text-blue-600 tracking-wide uppercase leading-none">
                M. ZUBAIR &bull; Business &amp; Tax Consultant
              </p>
            </div>

            {/* Core Description (SEO-friendly) */}
            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              We provide professional corporate counsel, error-free Income Tax filings, seamless GST return reconciliations, statutory financial audits, and reliable business registration services. Secure your financial future today with our verified consultation models.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-150 text-base"
                id="hero-primary-cta"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={18} />
              </button>
              
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-150 text-base"
                id="hero-secondary-cta"
              >
                Explore Services
              </button>
            </div>

            {/* Live Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200 max-w-lg">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accuracy Shield</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900">15+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Core Services</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900">0</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Late Penalty History</p>
              </div>
            </div>

          </div>

          {/* Hero Right Banner Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Overlay styling elements */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center gap-3 border border-blue-50">
                <div className="bg-emerald-500 p-2 rounded-lg text-white">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Trusted Advisory</p>
                  <div className="flex items-center gap-1">
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-semibold text-slate-600 ml-0.5">5.0 Rating</span>
                  </div>
                </div>
              </div>

              <img 
                src="/src/assets/images/hero_consultancy_1782840584266.jpg" 
                alt="Zubair and Associates - Tax & Business Advisory Panel" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Consultation Ribbon */}
            <a 
              href="tel:9873630903" 
              className="absolute bottom-[-15px] right-6 bg-slate-900 hover:bg-blue-600 text-white flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 text-sm font-semibold border border-slate-800"
              id="hero-floating-call"
            >
              <Phone size={14} className="animate-bounce text-blue-400" />
              <span>Call: +91 9873630903</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
