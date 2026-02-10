import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
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

const ProjectCard = ({ project, index, isInView }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}

      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: '0px 20px 40px rgba(0,0,0,0.12)',
      }}
      transition={hoverTransition}

      className="bg-white rounded-3xl p-8 flex flex-col will-change-transform"
      style={{ minHeight: 420 }}
    >
      <h3 className="text-2xl font-bold mb-3 leading-snug">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {project.shortDescription}
      </p>

      <ul className="text-sm text-light-cream-700 space-y-2 mb-6">
        {project.bullets.slice(0, 3).map((bullet, i) => (
          <li key={i}>• {bullet}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: 'var(--color-light-cream)',
              color: 'var(--color-coffee)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
        onClick={() => navigate(`/projects/${project.id}`)}
        className="mt-auto px-6 py-3 rounded-full font-semibold"
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
