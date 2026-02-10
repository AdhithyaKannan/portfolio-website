import { motion, useScroll, useTransform } from 'framer-motion';
import DotGrid from './RippleGrid';
import RippleGrid from './RippleGrid';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom right, var(--color-light-cream), var(--color-cream))',
      }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <RippleGrid />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        <motion.div
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            <span style={{ color: 'var(--color-espresso)' }}>
              Adhithya
            </span>
            <span className="block gradient-text">Kannan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-12"
            style={{ color: 'var(--color-dark-brown)' }}
          >
            Final-year Computer Science undergraduate focused on
            <br />
            Artificial Intelligence, Machine Learning, Computer Vision,
            and IoT systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="gradient-bg px-12 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ color: 'var(--color-cream)' }}
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div
          className="w-0.5 h-16 rounded-full"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--color-coffee))',
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
