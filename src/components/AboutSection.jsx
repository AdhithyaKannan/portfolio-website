import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TechBelt from './TechBelt';

const AboutSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-32"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-espresso)',
            }}
          >
            About Me
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background:
                'linear-gradient(to right, var(--color-coffee), var(--color-mocha))',
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
              style={{
                borderColor: 'var(--color-coffee)',
                backgroundColor: 'var(--color-light-cream)',
              }}
            >
              <img
                src="/assets/profile.jpg"
                alt="Adhithya Kannan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 max-w-xl"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-dark-brown)' }}
            >
              I’m a final-year Computer Science undergraduate specializing in
              Artificial Intelligence and Machine Learning, with strong hands-on
              experience across Computer Vision, Natural Language Processing,
              and IoT-based intelligent systems.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-dark-brown)' }}
            >
              I enjoy building end-to-end solutions — from data processing and
              model design to deployment on edge devices — with a focus on
              explainability, efficiency, and real-world impact.
            </p>

            <p
              className="text-2xl italic mt-8 pl-6 border-l-4"
              style={{
                fontFamily: 'var(--font-family-display)',
                color: 'var(--color-coffee)',
                borderColor: 'var(--color-mocha)',
              }}
            >
              “I like building systems where intelligence meets practicality.”
            </p>
          </motion.div>
        </div>
        <h2
            className="text-2xl md:text-2xl font-bold text-center mb-8"
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-espresso)',
            }}
          >
            Tech Stack
          </h2>

        <TechBelt />
      </div>
    </section>
  );
};

export default AboutSection;
