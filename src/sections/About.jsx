import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase } from 'lucide-react';

/**
 * About Section Component
 * Features: Profile image, stats, design philosophy, achievements
 */
const About = () => {
  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Briefcase, number: '10+', label: 'Years Experience' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={containerVariants}>
            {/* Title */}
            <motion.div variants={itemVariants} className="mb-8 ">

            </motion.div>

            <motion.h2 variants={itemVariants} className="section-title">
              The Essence Of Tattva
              <div className="h-1 w-52 bg-gradient-to-r mx-auto mt-4 from-primary-900 to-accent-gold" />
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-primary-600 leading-relaxed mb-6"
            >
              The word “Tatva” represents the fundamental essence of creation. Inspired by this philosophy, we design spaces that are rooted in balance, purpose, and beauty.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-primary-600 leading-relaxed mb-8"
            >
              We believe every project deserves a unique identity. Through thoughtful planning, refined aesthetics, and attention to detail, we create spaces that feel authentic, elegant, and deeply personal.
            </motion.p>

            <motion.h2 variants={itemVariants} className="section-title">
              The Design Mind Behind Tattva
              <div className="h-1 w-52 bg-gradient-to-r mx-auto mt-4 from-primary-900 to-accent-gold" />
            </motion.h2>

            {/* Philosophy */}
            <motion.div
              variants={itemVariants}
              className="bg-primary-50 p-8 mb-8 border-l-4 border-[#191970]"
            >
              <p className="text-lg text-primary-700 font-extrabold mb-2 uppercase tracking-wide">
                "Founder & Interior Designer"
              </p>
              <motion.p
                variants={itemVariants}
                className="font-sans text-base md:text-lg text-primary-600 leading-relaxed mb-8"
              >
                Hi There, I'm <b>Megha Sahu</b>, Design has always been more than a profession for me—it’s a way of transforming how people experience their surroundings.<br /> <br />
                My passion lies in creating spaces that are not only visually beautiful but also meaningful, practical, and tailored to the people who use them every day.<br /><br />
                At Tatva, I personally guide each project from concept to completion, ensuring every detail reflects the client’s vision while maintaining a timeless design approach.<br /><br />
                I believe that great interiors should inspire, comfort, and tell a story—and that’s exactly what I strive to creating.

              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <Icon className="w-8 h-8 text-[#191970] mx-auto mb-3" />
                    <p className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                      {stat.number}
                    </p>
                    <p className="font-sans text-xs md:text-sm text-primary-600">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
