import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReelModal from './components/ReelModal';
import SectionDivider from './components/SectionDivider';

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

  return (
    <div className="min-h-screen bg-[#0F0E17] text-[#FFFFF0] font-sans selection:bg-[#FF6B35] selection:text-white">
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

      {/* Glowing Neon Divider 1 */}
      <SectionDivider accent="coral" />

      {/* Portfolio Section */}
      <Portfolio onOpenModal={(project) => setSelectedProject(project)} />

      {/* Glowing Neon Divider 2 */}
      <SectionDivider accent="violet" />

      {/* FAQ Section */}
      <FAQ />

      {/* Glowing Neon Divider 3 */}
      <SectionDivider accent="coral" />

      {/* Lead Generation Contact Form */}
      <Contact
        preselectedService={preselectedService}
        preselectedPlan={preselectedPlan}
      />

      {/* Glowing Neon Divider 4 */}
      <SectionDivider accent="violet" />

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
