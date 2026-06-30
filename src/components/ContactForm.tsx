import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldAlert } from 'lucide-react';
import { SERVICES } from '../data';

interface ContactFormProps {
  preselectedService: string;
  onClearPreselectedService: () => void;
}

export default function ContactForm({ preselectedService, onClearPreselectedService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    serviceNeeded: '',
    messageContent: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselected service from modal clicks
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceNeeded: preselectedService
      }));
    }
  }, [preselectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific error as user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/; // Standard Indian 10-digit mobile check

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email address is required';
    } else if (!emailPattern.test(formData.emailAddress)) {
      errors.emailAddress = 'Enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phonePattern.test(formData.phoneNumber.replace(/[\s-]/g, ''))) {
      errors.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.serviceNeeded) {
      errors.serviceNeeded = 'Please select a required service';
    }

    if (!formData.messageContent.trim()) {
      errors.messageContent = 'Brief details about your query are required';
    }

    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real database or email sending pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        serviceNeeded: '',
        messageContent: ''
      });
      onClearPreselectedService();
      
      // Reset success alert after some time
      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-sm font-extrabold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <span>Get In Touch</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule a Premium Advisory Session
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill out the inquiry form below, or call our direct helpline. Our consultant, M. Zubair, will review your requirements and provide structured action points.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact cards and Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Business coordinates card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm text-left">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Official Coordinates
              </h3>

              <div className="space-y-4">
                {/* Mobile */}
                <a 
                  href="tel:9873630903" 
                  className="flex items-start gap-4 group hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-all"
                  id="contact-phone-link"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Helpline</p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                      +91 9873630903
                    </p>
                    <p className="text-xs text-slate-500">Available on Call &amp; WhatsApp</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:kzubair99@gmail.com" 
                  className="flex items-start gap-4 group hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-all"
                  id="contact-email-link"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Inquiry Inbox</p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">
                      kzubair99@gmail.com
                    </p>
                    <p className="text-xs text-slate-500">Fast response within 2 working hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-2 -mx-2">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Coverage</p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-800">
                      Delhi NCR &amp; PAN-India Service
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      E-Filing and advisory processed securely online across all states in India.
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-2 -mx-2">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-800">
                      Mon - Sat: 9:30 AM - 7:00 PM
                    </p>
                    <p className="text-xs text-slate-500">Sundays: Pre-booked slots only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-sm flex-1 min-h-[250px] overflow-hidden relative">
              <iframe
                title="Zubair and Associates - Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.272366768393!2d77.2065121481541!3d28.62768925464523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b1d11111%3A0x6d9f37b1c1c1c1c1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[250px] rounded-xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="google-maps-iframe"
              />
            </div>
          </div>

          {/* Right Column: Interactive Lead capture form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col justify-between text-left">
              <div>
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-6">
                  Online Advisory Form
                </h3>

                {/* Form feedback banners */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex gap-3 items-start animate-fade-in" id="form-success-banner">
                    <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Form Submitted Successfully!</p>
                      <p className="mt-1 font-medium">Thank you for contacting Zubair &amp; Associates. M. Zubair will contact you at your phone number (+91 9873630903 hotline active) or email within 2-4 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-5" id="consultation-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="fullName">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder-slate-400 ${
                          formErrors.fullName 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                          <ShieldAlert size={10} />
                          <span>{formErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="phoneNumber">
                        Indian Mobile Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-xs font-bold text-slate-400 select-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          maxLength={10}
                          placeholder="98736XXXXX"
                          className={`w-full bg-slate-50 border rounded-xl py-3 pl-12 pr-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder-slate-400 ${
                            formErrors.phoneNumber 
                              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                          }`}
                        />
                      </div>
                      {formErrors.phoneNumber && (
                        <p className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                          <ShieldAlert size={10} />
                          <span>{formErrors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="emailAddress">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder-slate-400 ${
                          formErrors.emailAddress 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {formErrors.emailAddress && (
                        <p className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                          <ShieldAlert size={10} />
                          <span>{formErrors.emailAddress}</span>
                        </p>
                      )}
                    </div>

                    {/* Service selection dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="serviceNeeded">
                        Service Required
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-xl py-3 px-3 text-sm font-medium text-slate-800 outline-none transition-all cursor-pointer ${
                          formErrors.serviceNeeded 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                      >
                        <option value="">-- Choose Corporate Compliance --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {formErrors.serviceNeeded && (
                        <p className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                          <ShieldAlert size={10} />
                          <span>{formErrors.serviceNeeded}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="messageContent">
                      Describe Your Tax / Business Query
                    </label>
                    <textarea
                      id="messageContent"
                      name="messageContent"
                      rows={4}
                      value={formData.messageContent}
                      onChange={handleInputChange}
                      placeholder="Please share turnover figures, filing years, or licensing query details so we can assist you better..."
                      className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder-slate-400 resize-none ${
                        formErrors.messageContent 
                          ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {formErrors.messageContent && (
                      <p className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                        <ShieldAlert size={10} />
                        <span>{formErrors.messageContent}</span>
                      </p>
                    )}
                  </div>

                  {/* Security/Trust Note */}
                  <p className="text-[10px] text-slate-400 leading-snug">
                    🔒 <strong>Strict Privacy Protocol:</strong> We secure all personal data, GST logins, and bank projections in client-encrypted folders. No data is shared with third parties.
                  </p>
                </form>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
                <button
                  onClick={handleFormSubmit}
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 transition-all duration-150 disabled:opacity-50 text-sm`}
                  id="form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Validating Details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Secure Request</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
