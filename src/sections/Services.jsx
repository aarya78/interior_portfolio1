import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/sampleData';

/**
 * Services Section Component
 * Features: Service cards, feature lists, hover effects
 */
const Services = () => {
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
    <section id="services" className="section-padding bg-white">
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
            Our Services
          </h2>
          <p className="section-subtitle">
            Comprehensive interior design services tailored to transform your space into something extraordinary.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-primary-200"
        >
          <h3 className="text-center font-serif text-3xl md:text-4xl font-semibold text-primary-900 mb-12">
            Our Design Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We listen to your vision and understand your needs, lifestyle, and preferences.',
              },
              {
                step: '02',
                title: 'Consultation',
                description: 'Detailed discussions about budget, timeline, and design direction.',
              },
              {
                step: '03',
                title: 'Design & 3D Visualization',
                description: 'We create stunning 3D renderings and mood boards for your approval.',
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Seamless execution and project management until final installation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-serif font-bold text-accent-gold mb-4">
                  {item.step}
                </div>
                <h4 className="font-sans font-semibold text-primary-900 mb-3 text-lg">
                  {item.title}
                </h4>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < 3 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:block absolute right-0 top-1/2 -mr-4 text-2xl text-accent-gold"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
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
            Ready to transform your space? Let's work together!
          </p>
          <button className="btn-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
