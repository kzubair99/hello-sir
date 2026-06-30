import { useState, useMemo } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQs() {
  const [activeId, setActiveId] = useState<string | null>('faq1'); // First one active by default
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'tax', name: 'Income Tax & Refund' },
    { id: 'gst', name: 'GST Compliances' },
    { id: 'business', name: 'Business Setup & MSME' }
  ];

  const filteredFaqs = useMemo(() => {
    if (selectedFaqCategory === 'all') return FAQS;
    return FAQS.filter(faq => faq.category === selectedFaqCategory);
  }, [selectedFaqCategory]);

  const toggleAccordion = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-sm font-extrabold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <HelpCircle size={12} className="text-blue-500" />
            <span>Filing Support &amp; FAQ</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers to Critical Tax Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have doubts about filing deadlines, GST thresholds, or forming a partnership? Browse our quick reference guide or contact us for bespoke consultation.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10" id="faq-category-tabs">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFaqCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all border ${
                selectedFaqCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800'
              }`}
              id={`faq-tab-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4" id="faq-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? 'border-blue-200 bg-blue-50/20 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
                id={`accordion-${faq.id}`}
              >
                {/* Header/Question tab */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="pr-4 leading-snug">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-500 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {/* Collapsible content */}
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-blue-100/50' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 md:p-6 text-slate-600 text-xs sm:text-sm leading-relaxed text-left bg-white/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Action card */}
        <div className="mt-12 text-center max-w-lg mx-auto bg-blue-50/50 border border-blue-100 p-6 rounded-2xl">
          <p className="text-slate-700 text-xs sm:text-sm font-medium">
            Still have an unanswered question about your tax or corporate compliance?
          </p>
          <a
            href="tel:9873630903"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-extrabold text-sm mt-2 transition-colors"
          >
            Ask M. Zubair directly &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
