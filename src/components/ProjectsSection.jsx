import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen py-24"
      style={{ backgroundColor: 'var(--color-light-cream)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-espresso)',
            }}
          >
            Projects
          </h2>

          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{
              background:
                'linear-gradient(to right, var(--color-coffee), var(--color-mocha))',
            }}
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={true}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
