import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const hoverTransition = {
  type: 'spring',
  stiffness: 220,
  damping: 20,
  mass: 0.6,
};

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  const [activeTech, setActiveTech] = useState(null);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: '0px 16px 32px rgba(0,0,0,0.10)',
      }}
      transition={hoverTransition}
      className="bg-white rounded-3xl p-6 flex flex-col"
      style={{ minHeight: 340 }}
    >
      <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-3 text-sm line-clamp-2">
        {project.shortDescription}
      </p>

      <ul
        className="text-xs space-y-1.5 mb-4"
        style={{ color: 'var(--color-dark-brown)' }}
      >
        {project.bullets.slice(0, 3).map((bullet, i) => (
          <li key={i}>• {bullet}</li>
        ))}
      </ul>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <motion.span
            key={tech}
            onClick={() => {
              setActiveTech(tech);
              setTimeout(() => setActiveTech(null), 3000);
            }}
            whileHover={{ scale: 1.05 }}
            animate={{
              backgroundColor:
                activeTech === tech
                  ? 'var(--color-coffee)'
                  : 'var(--color-light-cream)',
              color:
                activeTech === tech
                  ? 'var(--color-cream)'
                  : 'var(--color-coffee)',
            }}
            transition={{ duration: 0.3 }}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium cursor-pointer"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
        onClick={() => navigate(`/projects/${project.id}`)}
        className="mt-auto px-5 py-2.5 rounded-full text-sm font-semibold"
        style={{
          backgroundColor: 'var(--color-coffee)',
          color: 'var(--color-cream)',
        }}
      >
        View More
      </motion.button>
    </motion.div>
  );
};

export default ProjectCard;
