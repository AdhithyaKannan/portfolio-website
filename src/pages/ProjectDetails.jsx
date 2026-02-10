import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; // ✅ FIX 1
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { projectReports } from '../data/projectReports';

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);
  const report = projectReports[projectId];

  // ✅ FIX 2 — hook BEFORE return
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // or 'auto'
    });
  }, []);

  if (!project || !report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen py-32"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* TITLE */}
        <motion.h1
          variants={sectionVariants}
          className="text-4xl md:text-5xl font-bold mb-14"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {project.title}
        </motion.h1>

        {/* REPORT SECTIONS */}
        <div className="space-y-12 mb-20">
          {report.sections.map((section, index) => (
            <motion.div key={index} variants={sectionVariants}>
              <h2 className="text-2xl font-semibold mb-4">
                {section.title}
              </h2>

              <p className="text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
