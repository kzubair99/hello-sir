import { ADVANTAGES } from '../data';
import LucideIcon from './LucideIcon';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-sm font-extrabold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <span>Why Choose Us</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Commitment to Compliance &amp; Client Growth
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are dedicated to safeguarding your business interests. By blending technological automation on the tax portal with veteran professional oversight, we maintain a flawless track record.
          </p>
        </div>

        {/* Dynamic Card Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="advantages-grid">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              className="bg-slate-50 border border-slate-100 hover:border-blue-100 rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 text-left relative group"
              id={`adv-card-${adv.id}`}
            >
              {/* Icon Container */}
              <div className="p-3 bg-white text-blue-600 rounded-xl inline-flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-6">
                <LucideIcon name={adv.iconName} size={22} />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}

          {/* Special CTA Box in the grid */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left relative overflow-hidden md:col-span-2 lg:col-span-1 shadow-lg shadow-slate-900/10">
            {/* Background pattern decoration */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest bg-blue-900/40 px-2 py-0.5 rounded border border-blue-800/30">
                Direct Contact Line
              </span>
              <h3 className="text-lg md:text-xl font-extrabold tracking-tight">
                Have a Complex Tax or Business Query?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with M. Zubair directly for instant structural advice regarding company setup, audits, or delayed tax refunds.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Immediate Assistance</p>
                <a 
                  href="tel:9873630903" 
                  className="text-base sm:text-lg font-extrabold text-blue-300 hover:text-white transition-colors"
                >
                  +91 9873630903
                </a>
              </div>
              <a
                href="mailto:kzubair99@gmail.com"
                className="bg-blue-600 hover:bg-blue-500 text-white text-center text-xs font-bold px-4 py-2.5 rounded-xl transition-colors border border-blue-500"
              >
                Email Inquiry
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
