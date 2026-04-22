import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/sampleData';
import logo from '../assets/logo (1).png';

/**
 * Navbar Component
 * Features: Sticky navigation, mobile menu toggle, smooth scroll
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto hover:transition-transform hover:scale-105 cursor-pointer" />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`font-sans text-sm tracking-wider transition-colors duration-300 ${
                  isScrolled
                    ? 'text-primary-900 hover:text-accent-gold'
                    : 'text-primary-900 hover:text-accent-gold'
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => handleNavClick('#contact')}
            className="hidden md:block btn-primary"
          >
            Contact
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X size={24} className="text-primary-900" />
            ) : (
              <Menu size={24} className="text-primary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-6 pb-6 border-t border-primary-200 pt-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 font-sans text-sm text-primary-900 hover:text-accent-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full mt-4 btn-primary"
            >
              Contact
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
