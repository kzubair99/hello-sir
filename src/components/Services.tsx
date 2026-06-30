import { useState, useMemo } from 'react';
import { Search, Info, ArrowRight, X, Sparkles, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import LucideIcon from './LucideIcon';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'taxation', name: 'Taxation & TDS' },
    { id: 'audit', name: 'Audit & Assurance' },
    { id: 'incorporation', name: 'Business Setup' },
    { id: 'registration', name: 'Licenses & Registrations' },
    { id: 'advisory', name: 'Advisory & Loans' }
  ];

  // Filtering Logic
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleBookService = (service: Service) => {
    setSelectedService(null);
    if (onSelectService) {
      onSelectService(service.title);
    }
    // Smooth scroll to contact
    const element = document.getElementById('contact');
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
    <section id="services" className="py-20 bg-slate-50 relative">
      {/* Visual top dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-sm font-extrabold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <Sparkles size={12} className="text-blue-500" />
            <span>Our Service Portfolio</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Corporate Compliances &amp; Advisory Under One Roof
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From filing individual income tax returns to setting up complex LLPs, statutory audits, and obtaining FSSAI food certificates, we provide professional execution with zero compromise on legal accuracy.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2" id="service-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-150 border ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800 shadow-sm'
                  }`}
                  id={`tab-${cat.id}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs" id="service-search-box">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Search size={16} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. GST, ITR...)"
                className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl py-2 pl-9 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none transition-all"
                id="service-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                  id="search-clear-btn"
                >
                  <X size={14} />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between text-left relative overflow-hidden"
                id={`card-${service.id}`}
              >
                {/* Accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />

                <div className="space-y-4">
                  {/* Icon and category badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <LucideIcon name={service.iconName} size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {service.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                  <span className="inline-flex items-center gap-1">
                    <Info size={13} />
                    <span>View Filing Details</span>
                  </span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-md mx-auto" id="no-services-found">
            <p className="text-slate-500 font-medium text-base mb-3">No matching services found</p>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Try modifying your search term or select another category above. Alternatively, contact us directly with your specific requirements.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Overlay Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
          id="service-detail-modal"
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-blue-50 relative flex flex-col max-h-[90vh] text-left animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-blue-50/50 to-white">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-blue-600 text-white rounded-xl shrink-0">
                  <LucideIcon name={selectedService.iconName} size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-blue-600 tracking-wider bg-blue-100/40 px-2 py-0.5 rounded">
                    {selectedService.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mt-1 leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                id="close-modal-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Overview</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {selectedService.detailedDescription}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">What We Handle</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Need customized planning? Discuss this with M. Zubair directly.
              </div>
              <div className="flex gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 sm:flex-none border border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-sm transition-colors bg-white"
                >
                  Close Window
                </button>
                <button
                  onClick={() => handleBookService(selectedService)}
                  className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md shadow-blue-100 transition-colors flex items-center justify-center gap-1.5"
                  id="modal-book-consultation"
                >
                  <span>Book Consult</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
