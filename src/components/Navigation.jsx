import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Navigation = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
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

  /* ✅ CORE FIX */
  const scrollToSection = (id) => {
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
        ? 'rgba(15, 13, 11, 0.53)'
        : 'rgba(250, 243, 224, 0.45)'
      : 'transparent';

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        backgroundColor: navbarBg,
        backdropFilter: scrolled || !isHome ? 'blur(14px)' : 'blur(0px)',
        boxShadow:
          scrolled || !isHome
            ? '0 8px 30px rgba(0,0,0,0.12)'
            : 'none',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <motion.div
        animate={{
          maxWidth: scrolled || !isHome ? '100%' : '72rem',
          paddingLeft: scrolled || !isHome ? '3rem' : '0rem',
          paddingRight: scrolled || !isHome ? '3rem' : '0rem',
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 20,
        }}
        className="mx-auto flex items-center justify-between py-6"
      >
        {/* LOGO */}
        <div
          className="text-3xl font-bold cursor-pointer select-none"
          style={{
            fontFamily: 'var(--font-family-display)',
            color: 'var(--color-espresso)',
          }}
          onClick={() => scrollToSection('home')}
        >
          Adhithya Kannan
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-10">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative font-medium"
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
            className="text-xl"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
