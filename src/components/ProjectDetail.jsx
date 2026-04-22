import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ProjectDetail Component
 * Features: Image carousel, before/after slider, detailed project info
 */
const ProjectDetail = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleSliderChange = (e) => {
    setSliderPosition(
      (e.clientX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.getBoundingClientRect().width *
      100
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="min-h-screen flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-primary-200 p-6 flex justify-between items-center">
              <h2 className="font-serif text-3xl font-semibold text-primary-900">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary-100 rounded-full transition-colors"
              >
                <X size={24} className="text-primary-900" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-12">
              {/* Main Image Carousel */}
              <div>
                <div className="relative bg-primary-100 rounded-lg overflow-hidden h-96 md:h-[500px] mb-6">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />

                  {/* Carousel Controls */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white bg-opacity-50'
                              }`}
                            whileHover={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <p className="text-center text-primary-600 text-sm">
                    {currentImageIndex + 1} of {project.images.length}
                  </p>
                )}
              </div>

              {/* Project Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary-900 mb-6">
                    Project Details
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-primary-600 text-sm font-sans font-semibold uppercase mb-2">
                        Category
                      </p>
                      <p className="text-primary-900 font-sans text-lg">
                        {project.category} - {project.style}
                      </p>
                    </div>

                    <div>
                      <p className="text-primary-600 text-sm font-sans font-semibold uppercase mb-2">
                        Duration
                      </p>
                      <p className="text-primary-900 font-sans text-lg">
                        {project.duration}
                      </p>
                    </div>

                    <div>
                      <p className="text-primary-600 text-sm font-sans font-semibold uppercase mb-2">
                        Budget
                      </p>
                      <p className="text-primary-900 font-sans text-lg">
                        {project.budget}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary-900 mb-6">
                    Description
                  </h3>
                  <p className="text-primary-600 leading-relaxed font-sans">
                    {project.details}
                  </p>
                </div>
              </div>

              {/* Tools and Materials */}
              <div className="bg-primary-50 p-8 border border-primary-200">
                <h3 className="font-serif text-2xl font-semibold text-primary-900 mb-6">
                  Tools & Materials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-3 h-3 bg-accent-gold rounded-full" />
                      <span className="text-primary-900 font-sans">
                        {tool}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Before & After Slider */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary-900 mb-6">
                  Transformation
                </h3>
                <div
                  className="relative bg-primary-100 rounded-lg overflow-hidden h-96 cursor-col-resize"
                  onMouseMove={handleSliderChange}
                  onClick={handleSliderChange}
                >
                  {/* Before Image */}
                  <img
                    src={project.beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* After Image */}
                  <div
                    style={{ width: `${100 - sliderPosition}%` }}
                    className="absolute inset-0 right-0 overflow-hidden"
                  >
                    <img
                      src={project.afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Slider Handle */}
                  <div
                    style={{ left: `${sliderPosition}%` }}
                    className="absolute inset-y-0 w-1 bg-white cursor-col-resize transition-colors hover:bg-accent-gold"
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                      <ChevronLeft size={16} className="text-primary-900" />
                      <ChevronRight size={16} className="text-primary-900 -ml-4" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 px-3 py-2 rounded text-white text-sm font-sans">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 px-3 py-2 rounded text-white text-sm font-sans">
                    After
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white p-8 rounded-lg text-center">
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Inspired by this project?
                </h3>
                <p className="mb-6 text-primary-100">
                  Let's discuss how we can create something equally beautiful for your space.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-accent-gold text-primary-900 font-sans font-medium rounded-none hover:bg-white transition-colors uppercase tracking-wider"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
