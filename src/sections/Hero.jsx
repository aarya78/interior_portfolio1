import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Section Component
 * Features: Full-screen hero, animated text, CTA button, scroll indicator
 */
const Hero = ({ onViewProjects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 to-white" 
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-900 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom px-4 md:px-8 text-center"
      >

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-sm md:text-base font-semibold text-accent-gold uppercase tracking-widest mb-6 mt-20"
        >
          Welcome to Aesthetic Spaces
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-900 mb-6 leading-tight"
        >
          Megha Sahu
        </motion.h1>

        {/* Divider Line */}
        <motion.div
          variants={lineVariants}
          className="h-1 w-40 bg-gradient-to-r from-accent-gold to-primary-900 mx-auto mb-8"
        />

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-2xl md:text-4xl text-primary-700 mb-8 max-w-3xl mx-auto"
        >
          Designing Spaces That Inspire
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-lg text-primary-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transform your living spaces into extraordinary environments that reflect your personality and elevate your lifestyle. With a keen eye for detail and a passion for design excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <button
            onClick={onViewProjects}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            Learn More
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className=" mt-10absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-sans text-xs text-primary-600 uppercase tracking-wider">
              Scroll to Explore
            </span>
            <ChevronDown size={20} className="text-accent-gold" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-1/4 w-1 h-1 bg-accent-gold rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary-900 rounded-full opacity-30"
      />
    </section>
  );
};

export default Hero;
