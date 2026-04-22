import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Contact Section Component
 * Features: Contact form, contact info, email integration ready
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="contact" className="section-padding bg-white">
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
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Ready to start your interior design journey? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-8"
          >
            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary-900" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-primary-900 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@aarya.design"
                  className="text-primary-600 hover:text-accent-gold transition-colors"
                >
                  hello@aarya.design
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary-900" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-primary-900 mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-primary-600 hover:text-accent-gold transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary-900" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-primary-900 mb-2">
                  Office
                </h3>
                <p className="text-primary-600">
                  123 Design Street<br />
                  Creative City, CC 12345
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              className="p-6 bg-primary-50 border border-primary-200"
              whileHover={{ borderColor: '#d4af37' }}
            >
              <h3 className="font-sans font-semibold text-primary-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-primary-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-sans font-semibold text-primary-900 mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 focus:border-accent-gold focus:outline-none transition-colors bg-white text-primary-900"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-sans font-semibold text-primary-900 mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 focus:border-accent-gold focus:outline-none transition-colors bg-white text-primary-900"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Phone */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <label
                htmlFor="phone"
                className="block text-sm font-sans font-semibold text-primary-900 mb-3"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-primary-300 focus:border-accent-gold focus:outline-none transition-colors bg-white text-primary-900"
                placeholder="+1 (234) 567-890"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <label
                htmlFor="message"
                className="block text-sm font-sans font-semibold text-primary-900 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-primary-300 focus:border-accent-gold focus:outline-none transition-colors resize-none bg-white text-primary-900"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <Send size={18} />
            </motion.button>

            {/* Privacy Notice */}
            <p className="text-xs text-primary-600 text-center">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </motion.form>
        </motion.div>

        {/* Google Maps Embed (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg overflow-hidden shadow-lg h-96"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634434743!2d-74.00601!3d40.71455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd34eb11fccf567cb!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
