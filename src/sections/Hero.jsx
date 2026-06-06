import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import slide1 from '../assets/Projects/slide-1.jpeg';
import slide2 from '../assets/Projects/slide-2.jpeg';
import slide3 from '../assets/Projects/slide-3.jpeg';

/**
 * Hero Section Component
 * Features: Full-screen hero, animated text, CTA button, scroll indicator
 */
const Hero = ({ onViewProjects }) => {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

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
      className="relative w-full min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            alt={`slide-${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover object-top sm:object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70 sm:bg-black/60 md:bg-black/50 z-10" />
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-accent-gold rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 bg-primary-900 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8 py-20 md:py-0"
      >

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm md:text-base font-semibold text-accent-gold uppercase tracking-widest mb-4 mt-6 md:mt-20"
        >
          Welcome to Aesthetic Spaces
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]"
        >
          Megha Sahu
        </motion.h1>

        {/* Divider Line */}
        <motion.div
          variants={lineVariants}
          className="h-1 w-28 sm:w-40 bg-gradient-to-r from-accent-gold to-white mx-auto mb-4 sm:mb-6 md:mb-8"
        />

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-100 mb-4 sm:mb-6 md:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2"
        >
          Designing Spaces That Inspire
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-sm sm:text-base md:text-lg text-gray-200 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed px-2 sm:px-0"
        >
          Transform your living spaces into extraordinary environments that reflect your personality and elevate your lifestyle. With a keen eye for detail and a passion for design excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-16 w-full max-w-xs mx-auto px-4"
        >
          <button
            onClick={onViewProjects}
            className="w-full sm:w-auto px-6 py-3 btn-primary text-sm sm:text-base"
          >
            View Projects
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3 border-2 border-white text-white bg-white/10 font-sans font-medium rounded-none transition-all duration-300 hover:bg-white/20 uppercase tracking-wider text-sm sm:text-base"
          >
            Learn More
          </button>
        </motion.div>

        {/* Scroll Indicator (centered) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute left-1/2 bottom-6 md:bottom-10 transform -translate-x-1/2 pointer-events-none"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-sans text-xs text-gray-200 uppercase tracking-wider">
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
