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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
              alt="Aarya Pandey"
              className="w-full h-auto rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            {/* Decorative Frame */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-accent-gold rounded-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            {/* Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary-900 mb-4">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-900 to-accent-gold" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-primary-600 leading-relaxed mb-6"
            >
              Hello! I'm Megha Sahu, a passionate interior designer with over 3 years of experience in transforming spaces. My journey in design started with a simple belief: every space has a story to tell.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-primary-600 leading-relaxed mb-8"
            >
              I specialize in creating bespoke interior solutions that seamlessly blend aesthetics with functionality. Whether it's a cozy residential apartment or a grand commercial space, I bring creativity, precision, and passion to every project.
            </motion.p>

            {/* Philosophy */}
            <motion.div
              variants={itemVariants}
              className="bg-primary-50 p-8 mb-8 border-l-4 border-accent-gold"
            >
              <h3 className="font-sans font-semibold text-primary-900 mb-3 uppercase tracking-wide text-sm">
                Design Philosophy
              </h3>
              <p className="font-serif text-lg text-primary-700 italic">
                "Design is not just about making things beautiful; it's about making them meaningful. Every element should serve a purpose and tell a part of your story."
              </p>
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
                    <Icon className="w-8 h-8 text-accent-gold mx-auto mb-3" />
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
