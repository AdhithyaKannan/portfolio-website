import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Navigation = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const navbarBg =
    scrolled || !isHome
      ? theme === 'dark'
        ? 'rgba(15, 13, 11, 0.85)'
        : 'rgba(250, 243, 224, 0.85)'
      : 'transparent';

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: navbarBg,
          backdropFilter: scrolled || !isHome ? 'blur(14px)' : 'blur(0px)',
          boxShadow:
            scrolled || !isHome
              ? '0 6px 24px rgba(0,0,0,0.10)'
              : 'none',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <motion.div
          animate={{
            maxWidth: scrolled || !isHome ? '100%' : '64rem',
            paddingLeft: scrolled || !isHome ? '2rem' : '1.5rem',
            paddingRight: scrolled || !isHome ? '2rem' : '1.5rem',
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
          className="mx-auto flex items-center justify-between py-4"
        >
          {/* LOGO */}
          <div
            className="text-xl md:text-2xl font-bold cursor-pointer select-none"
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-espresso)',
            }}
            onClick={() => scrollToSection('home')}
          >
            Adhithya Kannan
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative font-medium text-sm"
                style={{
                  color:
                    activeSection === section
                      ? 'var(--color-coffee)'
                      : 'var(--color-dark-brown)',
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}

                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: activeSection === section ? '100%' : '0%',
                    backgroundColor: 'var(--color-coffee)',
                  }}
                />
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="text-lg"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </motion.div>
      </motion.nav>

      {/* MOBILE SIDE PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col p-10"
              style={{
                backgroundColor: 'var(--color-cream)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <button
                className="self-end text-2xl mb-10"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>

              <div className="flex flex-col gap-8 text-xl">
                {['home', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left"
                    style={{
                      color: 'var(--color-espresso)',
                    }}
                  >
                    {section.charAt(0).toUpperCase() +
                      section.slice(1)}
                  </button>
                ))}

                <button
                  onClick={toggleTheme}
                  className="text-left text-lg mt-6"
                >
                  {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
