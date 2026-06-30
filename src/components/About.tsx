import { ShieldCheck, Target, Users2, FileCheck2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Ethical Compliance',
      desc: 'We follow 100% legal compliance structures, guiding you on legitimate deductions without resorting to aggressive schemes.',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      title: 'Client-Centric Mission',
      desc: 'We map out custom solutions for every client, ensuring personalized support from sole traders to multinational companies.',
      icon: Target,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      title: 'Proactive Advisory',
      desc: 'We don’t just file returns. We actively monitor government updates, notifying you about dynamic schemes or compliance modifications.',
      icon: FileCheck2,
      color: 'text-sky-600 bg-sky-50 border-sky-100'
    },
    {
      title: 'Collaborative Growth',
      desc: 'Your business growth translates to our success. We partner with you for long-term advisory, funding support, and structure planning.',
      icon: Users2,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-sm font-extrabold text-blue-600 tracking-wider uppercase">
                About the Founder &amp; Firm
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Your Trusted Guide in Business Compliance and Strategic Taxation
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Founded and spearheaded by <strong>M. ZUBAIR</strong>, a highly distinguished <strong>Business &amp; Tax Consultant</strong>, Zubair &amp; Associates has established itself as a beacon of financial reliability and statutory excellence. We bridge the gap between complex Indian tax regulations and ambitious business entities.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our firm specializes in a broad suite of professional services—spanning <strong>Income Tax Return filing, GST portal operations, corporate audit reconciliation, business registrations, food safety compliance, and bespoke banking loan advice</strong>. We take the administrative compliance weight off your shoulders, enabling you to focus purely on generating business revenue.
            </p>

            {/* Founder Quote card */}
            <div className="border-l-4 border-blue-600 bg-blue-50/60 p-5 rounded-r-xl">
              <p className="text-slate-800 italic font-medium text-sm md:text-base">
                "Our guiding philosophy is simple—absolute precision and unwavering transparency. We do not just process numbers; we curate secure compliance fortresses that support our client's growth from a seedling partnership to an established enterprise."
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">M. ZUBAIR</h4>
                  <p className="text-xs text-slate-500 font-medium">Founder &amp; Principal Consultant</p>
                </div>
                <span className="text-xs font-bold bg-blue-600/10 text-blue-700 px-2.5 py-1 rounded-md">
                  Active Member since 2018
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Values grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-1 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="p-6 md:p-8 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Our Pillars of Excellence
                </h3>
                
                <div className="grid grid-cols-1 gap-5">
                  {values.map((val, index) => {
                    const Icon = val.icon;
                    return (
                      <div key={index} className="flex gap-4 items-start">
                        <div className={`p-2.5 rounded-xl border ${val.color} shrink-0`}>
                          <Icon size={18} />
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {val.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
