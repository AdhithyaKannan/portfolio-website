import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const techStack = [
  { name: 'Python', logo: '/assets/tech/python.svg' },
  { name: 'PyTorch', logo: '/assets/tech/pytorch.svg' },
  { name: 'TensorFlow', logo: '/assets/tech/tensorflow.svg' },
  { name: 'OpenCV', logo: '/assets/tech/opencv.svg' },
  { name: 'Scikit-learn', logo: '/assets/tech/scikitlearnl.svg' },
  { name: 'Raspberry Pi', logo: '/assets/tech/raspberrypi.svg' },
  { name: 'PostgreSQL', logo: '/assets/tech/postgresql.svg' },
  { name: 'Git', logo: '/assets/tech/git.svg' },
  { name: 'GitHub', logo: '/assets/tech/github.svg' },
  { name: 'Docker', logo: '/assets/tech/docker.svg' },
  { name: 'Jira', logo: '/assets/tech/jira.svg' },
];

const TechBelt = () => {
  const [activeTech, setActiveTech] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    );
  }, []);

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => {
          const id = `${tech.name}-${index}`;
          const isActive = activeTech === id;

          return (
            <motion.div
              key={id}
              className="flex flex-col items-center justify-center min-w-[100px] cursor-pointer"
              onHoverStart={() => {
                if (!isTouch) setActiveTech(id);
              }}
              onHoverEnd={() => {
                if (!isTouch) setActiveTech(null);
              }}
              onClick={() => {
                if (isTouch) {
                  setActiveTech(id);

                  setTimeout(() => {
                    setActiveTech(null);
                  }, 2000); // 2 seconds
                }
              }}
            >
              {/* LOGO */}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -4 : 0,
                  backgroundColor: isActive
                    ? 'var(--color-coffee)'
                    : 'var(--color-light-caramel)',
                  boxShadow: isActive
                    ? '0 8px 20px rgba(0,0,0,0.15)'
                    : '0 0 0 rgba(0,0,0,0)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 18,
                }}
                className="w-14 h-14 flex items-center justify-center rounded-lg"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 object-contain pointer-events-none"
                  draggable={false}
                />
              </motion.div>

              {/* LABEL */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 4,
                }}
                transition={{ duration: 0.25 }}
                className="mt-2 text-xs"
                style={{ color: 'var(--color-dark-brown)' }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechBelt;
