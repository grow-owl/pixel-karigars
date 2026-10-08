import React, { useState, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientCarousel from '../components/ClientCarousel';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';

const ReelModal = lazy(() => import('../components/ReelModal'));

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToContact = () => {
    if (window.history.pushState) {
      window.history.pushState(null, '', '#contact');
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#0F172A] font-sans selection:bg-[#FF6B4A] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenContact={scrollToContact} />

      <SectionDivider />

      {/* Services Section */}
      <Services />

      <SectionDivider />

      {/* Featured Client Reels Section */}
      <Portfolio onOpenModal={(project) => setSelectedProject(project)} />

      <SectionDivider />

      {/* Lead Generation Contact Form */}
      <Contact />

      <SectionDivider />

      {/* Trusted Client Logos Carousel */}
      <ClientCarousel />

      {/* Footer */}
      <Footer />

      {/* Video Modal Player (Lazy Loaded) */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ReelModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </div>
  );
}
