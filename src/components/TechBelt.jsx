import { motion } from 'framer-motion';

/**
 * HOW TO ADD / REMOVE TECH:
 * 1. Put logo in: /public/assets/tech/
 * 2. Add entry to techStack below
 */

const techStack = [
  { name: 'Python', logo: '/src/assets/tech/python.svg' },
  { name: 'PyTorch', logo: '/src/assets/tech/pytorch.svg' },
  { name: 'TensorFlow', logo: '/src/assets/tech/tensorflow.svg' },
  { name: 'OpenCV', logo: '/src/assets/tech/opencv.svg' },
  { name: 'Scikit-learn', logo: '/src/assets/tech/scikitlearnl.svg' },
  { name: 'Raspberry Pi', logo: '/src/assets/tech/raspberrypi.svg' },
  { name: 'PostgreSQL', logo: '/src/assets/tech/postgresql.svg' },
  { name: 'Git', logo: '/src/assets/tech/git.svg' },
  { name: 'GitHub', logo: '/src/assets/tech/github.svg' },
  { name: 'Docker', logo: '/src/assets/tech/docker.svg' },
  { name: 'Jira', logo: '/src/assets/tech/jira.svg' },
];

const TechBelt = () => {
  return (
    <div className="relative overflow-hidden py-12">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex flex-col items-center justify-center min-w-[120px]"
          >
            {/* LOGO CARD */}
            <motion.div
              whileHover={{
                scale: 1.15,
                y: -6,
                boxShadow: '0 10px 25px var(--color-dark)',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              className="w-16 h-16 flex items-center justify-center rounded-xl"
              style={{
                backgroundColor: 'var(--color-light-caramel)',
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 object-contain pointer-events-none"
                draggable={false}
              />
            </motion.div>

            {/* LABEL */}
            <span
              className="mt-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: 'var(--color-dark-brown)' }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechBelt;
