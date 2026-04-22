import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * TestimonialCard Component
 * Features: Star rating, client photo, smooth animations
 */
const TestimonialCard = ({ testimonial, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="p-8 md:p-10 bg-primary-50 border border-primary-200 hover:border-accent-gold transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star size={18} className="fill-accent-gold text-accent-gold" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-lg leading-relaxed text-primary-900 mb-8 italic">
        "{testimonial.text}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-accent-gold"
          whileHover={{ scale: 1.1 }}
        />
        <div>
          <h4 className="font-sans font-semibold text-primary-900">
            {testimonial.name}
          </h4>
          <p className="text-primary-600 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Decorative Quote Mark */}
      <div className="absolute top-6 right-6 text-6xl text-accent-gold opacity-10 font-serif">
        "
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
