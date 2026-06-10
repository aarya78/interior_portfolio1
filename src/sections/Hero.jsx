import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const totalSlides = slides.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((s) => (s + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(id);
  }, [totalSlides]);

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
          Welcome to Tattva Interior
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]"
        >
          Tattva
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
          Space That Reflect To How You Are
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-sm sm:text-base md:text-lg text-gray-200 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed px-2 sm:px-0"
        >
          A space is more than walls and furniture—it is a reflection of your personality, lifestyle, and aspirations. At Tatva, we create thoughtfully designed interiors that blend elegance, comfort, and functionality to deliver spaces that feel truly yours.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-16 w-full max-w-xs mx-auto px-4"
        >
          {/* Replace CTA with a tel: link so mobile devices open the phone dialer. Update the number below as needed. */}
          <a
            href="tel:+919752007456"
            className="w-full sm:w-auto inline-block px-6 py-3 btn-primary text-sm sm:text-base text-center"
          >
            Book Your Consultant
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
