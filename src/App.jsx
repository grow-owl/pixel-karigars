import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

const ReelModal = lazy(() => import('./components/ReelModal'));

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F3EE] font-sans selection:bg-[#FF6B4A] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Hero Section */}
      <Hero
        onOpenContact={scrollToContact}
      />

      {/* Marquee Banner */}
      <TickerBar />

      {/* Glowing Neon Divider */}
      <SectionDivider accent="lime" />

      {/* Services Section */}
      <Services onOpenContact={scrollToContact} />

      {/* Glowing Neon Divider 1 */}
      <SectionDivider accent="coral" />

      {/* Featured Client Reels Section */}
      <Portfolio onOpenModal={(project) => setSelectedProject(project)} />

      {/* Glowing Neon Divider 2 */}
      <SectionDivider accent="violet" />

      {/* FAQ Section */}
      <FAQ />

      {/* Glowing Neon Divider 3 */}
      <SectionDivider accent="coral" />

      {/* Lead Generation Contact Form */}
      <Contact />

      {/* Glowing Neon Divider 4 */}
      <SectionDivider accent="violet" />

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
