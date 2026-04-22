import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/sampleData';

/**
 * Testimonials Section Component
 * Features: Client reviews, star ratings, carousels
 */
const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="testimonials" className="section-padding bg-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Client Testimonials
          </h2>
          <p className="section-subtitle">
            Real feedback from our satisfied clients who have transformed their spaces with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-10 text-8xl text-accent-gold opacity-5 font-serif">
            "
          </div>
          <div className="absolute -bottom-20 -right-10 text-8xl text-primary-900 opacity-5 font-serif">
            "
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-primary-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-serif text-4xl font-bold text-primary-900 mb-2">
              100+
            </p>
            <p className="text-primary-600">
              Satisfied Clients
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-serif text-4xl font-bold text-accent-gold mb-2">
              4.9/5
            </p>
            <p className="text-primary-600">
              Average Rating
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-serif text-4xl font-bold text-primary-900 mb-2">
              98%
            </p>
            <p className="text-primary-600">
              Client Satisfaction
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-sans text-base text-primary-600 mb-6">
            Don't just take our word for it. Schedule a consultation to see the difference we can make.
          </p>
          <button className="btn-secondary">
            Book Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
