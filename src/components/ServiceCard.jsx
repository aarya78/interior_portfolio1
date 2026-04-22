import React from 'react';
import { motion } from 'framer-motion';

/**
 * ServiceCard Component
 * Features: Icon, hover effects, feature list
 */
const ServiceCard = ({ service, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="group p-8 md:p-10 bg-white border border-primary-200 hover:border-accent-gold transition-all duration-300 hover:shadow-xl"
    >
      {/* Icon */}
      <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-900 mb-4 group-hover:text-accent-gold transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-primary-600 text-sm md:text-base leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-accent-gold font-bold mt-1">•</span>
            <span className="text-primary-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Accent Bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-primary-900 to-accent-gold"
      />
    </motion.div>
  );
};

export default ServiceCard;
