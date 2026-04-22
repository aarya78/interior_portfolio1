import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * ProjectCard Component
 * Features: Image hover effect, smooth animation, category badge
 */
const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72 md:h-96 bg-primary-100">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.95 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-primary-900 flex items-center justify-center"
        >
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onViewDetails(project)}
            className="flex items-center gap-3 px-6 py-3 bg-accent-gold text-primary-900 font-sans font-medium rounded-none hover:bg-white transition-colors"
          >
            View Details
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-6 left-6 flex gap-2"
        >
          <span className="px-4 py-2 bg-accent-gold text-primary-900 font-sans text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <span className="px-4 py-2 bg-white text-primary-900 font-sans text-xs font-semibold uppercase tracking-wider">
            {project.style}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-900 mb-3">
          {project.title}
        </h3>
        <p className="text-primary-600 text-sm md:text-base leading-relaxed mb-4">
          {project.shortDescription}
        </p>
        <motion.button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary-900 hover:text-accent-gold transition-colors"
          whileHover={{ x: 5 }}
          whileTap={{ x: -5 }}
        >
          Explore Project
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
