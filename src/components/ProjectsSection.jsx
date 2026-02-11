import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}   // 👈 lower trigger for mobile
      className="py-20 md:py-24"
      style={{ backgroundColor: 'var(--color-light-cream)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* TITLE */}
        <motion.div
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-espresso)',
            }}
          >
            Projects
          </h2>

          <div
            className="w-16 md:w-20 h-1 mx-auto mt-4 rounded-full"
            style={{
              background:
                'linear-gradient(to right, var(--color-coffee), var(--color-mocha))',
            }}
          />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
