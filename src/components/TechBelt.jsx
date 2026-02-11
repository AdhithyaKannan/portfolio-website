import { motion } from 'framer-motion';

/**
 * HOW TO ADD / REMOVE TECH:
 * 1. Put logo in: /public/assets/tech/
 * 2. Add entry to techStack below
 */

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
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex flex-col items-center justify-center min-w-[100px]"
          >
            {/* LOGO CARD */}
            <motion.div
              whileHover={{
                scale: 1.12,
                y: -4,
                boxShadow: '0 8px 20px var(--color-dark)',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              className="w-14 h-14 flex items-center justify-center rounded-lg"
              style={{
                backgroundColor: 'var(--color-light-caramel)',
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8 object-contain pointer-events-none"
                draggable={false}
              />
            </motion.div>

            {/* LABEL */}
            <span
              className="mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
