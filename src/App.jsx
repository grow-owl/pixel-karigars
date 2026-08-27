import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReelModal from './components/ReelModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedPlan, setPreselectedPlan] = useState('');

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
    setPreselectedPlan('');
    scrollToContact();
  };

  const handleSelectPlan = (planName) => {
    setPreselectedPlan(planName);
    setPreselectedService('');
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-rose-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Hero Section */}
      <Hero
        onOpenContact={scrollToContact}
        onSelectReel={(project) => setSelectedProject(project)}
      />

      {/* Marquee Banner */}
      <TickerBar />

      {/* Services Section */}
      <Services onSelectService={handleSelectService} />

      {/* Portfolio Section */}
      <Portfolio onOpenModal={(project) => setSelectedProject(project)} />

      {/* Why Choose Pixel Karigars */}
      <WhyUs />

      {/* Pricing Section */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* FAQ Section */}
      <FAQ />

      {/* Lead Generation Contact Form */}
      <Contact
        preselectedService={preselectedService}
        preselectedPlan={preselectedPlan}
      />

      {/* Footer */}
      <Footer />

      {/* Portfolio Video Modal */}
      {selectedProject && (
        <ReelModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
