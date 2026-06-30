import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-sm font-extrabold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <Sparkles size={12} className="text-blue-500" />
            <span>Client Testimonials</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved and Trusted by Growing Indian Businesses
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See how we help local retailers, startup founders, logistics firms, and corporate directors streamline their tax compliance, acquire funding, and build compliant firms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative"
              id={`testi-${t.id}`}
            >
              {/* Quote icon watermark */}
              <span className="absolute right-6 top-6 text-blue-500/10 pointer-events-none">
                <Quote size={48} />
              </span>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-0.5" id={`stars-${t.id}`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                  "{t.feedback}"
                </p>
              </div>

              {/* Author details */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white font-extrabold rounded-full flex items-center justify-center shadow-md shadow-blue-100 select-none">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t.designation}, <span className="text-slate-600 font-semibold">{t.companyName}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
