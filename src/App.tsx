import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
  };

  const handleClearSelectedService = () => {
    setSelectedServiceTitle('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600/10 selection:text-blue-600">
      
      {/* Sticky Header Navigation */}
      <Header />

      <main className="w-full">
        {/* Hero Banner Section */}
        <Hero />

        {/* About M. Zubair Section */}
        <About />

        {/* Filterable Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* Pillars / Advantages */}
        <WhyChooseUs />

        {/* Glowing Testimonials */}
        <Testimonials />

        {/* FAQs Accordion */}
        <FAQs />

        {/* Consultation Contact Form & Map */}
        <ContactForm 
          preselectedService={selectedServiceTitle} 
          onClearPreselectedService={handleClearSelectedService} 
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
