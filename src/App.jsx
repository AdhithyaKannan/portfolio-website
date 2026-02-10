import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  /* =========================
     SCROLL SPY (HOME ONLY)
     ========================= */
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = document.querySelectorAll('main > section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  /* =========================
     HASH SCROLL (FROM DETAILS)
     ========================= */
  useEffect(() => {
    if (location.pathname !== '/') return;
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location.pathname, location.hash]);

  /* =========================
     ROUTE FALLBACK
     ========================= */
  useEffect(() => {
    if (location.pathname.startsWith('/projects')) {
      setActiveSection('projects');
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Navigation activeSection={activeSection} />

      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          }
        />

        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
