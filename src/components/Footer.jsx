import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { socialLinks, navLinks } from '../data/sampleData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const iconMap = {
        Instagram: Instagram,
        Facebook: Facebook,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <footer className="relative bg-primary-900 text-white overflow-hidden">

            {/* ✨ Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gold gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-gold/8 rounded-full blur-3xl" />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ✨ Top Decorative Border */}
            <div className="relative">
                <div className="h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
                <div className="h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent mt-0.5" />
            </div>

            {/* ✨ CTA Banner Strip */}
            <div className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 border-b border-primary-700/50">
                <div className="container-custom py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div>
                            <p className="text-xs font-sans uppercase tracking-[0.3em] text-accent-gold mb-1">
                                Ready to Transform Your Space?
                            </p>
                            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                                Let's Create Something{" "}
                                <span className="text-accent-gold italic">Beautiful</span>
                            </h3>
                        </div>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-primary-900 font-sans font-semibold text-sm tracking-wide rounded-full overflow-hidden shadow-lg shadow-accent-gold/20 flex-shrink-0"
                        >
                            <span className="relative z-10">Start Your Project</span>
                            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                            {/* Shine sweep */}
                            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* ✨ Main Footer Content */}
            <div className="relative section-padding">
                <div className="container-custom">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-12"
                    >

                        {/* Brand Section — wider column */}
                        <motion.div variants={itemVariants} className="md:col-span-4">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="font-serif text-3xl font-semibold">
                                    Aarya
                                    <span className="text-accent-gold"> Pandey</span>
                                </h3>
                                {/* Gold underline accent */}
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="h-px w-12 bg-accent-gold" />
                                    <div className="h-px w-4 bg-accent-gold/40" />
                                    <div className="h-1 w-1 rounded-full bg-accent-gold" />
                                </div>
                            </div>

                            <p className="text-primary-300 text-sm leading-relaxed mb-8 max-w-xs">
                                Crafting exceptional interior spaces that inspire, elevate, and
                                transform everyday living into extraordinary experiences.
                            </p>

                            {/* Tagline badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/30 bg-accent-gold/5 mb-8">
                                <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                                <span className="text-accent-gold text-xs font-sans tracking-widest uppercase">
                                    Available for Projects
                                </span>
                            </div>

                            {/* Social Links — moved under brand */}
                            <div>
                                <p className="text-primary-400 text-xs uppercase tracking-[0.2em] mb-4">
                                    Follow Along
                                </p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = iconMap[social.icon];
                                        return (
                                            <motion.a
                                                key={social.name}
                                                href={social.url}
                                                title={social.name}
                                                whileHover={{ scale: 1.15, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-primary-600 bg-primary-800/50 text-primary-300 hover:border-accent-gold transition-all duration-300"
                                            >
                                                {/* Fill on hover */}
                                                <span className="absolute inset-0 bg-accent-gold scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full origin-center" />
                                                <span className="relative z-10 group-hover:text-primary-900 transition-colors duration-300">
                                                    {Icon && <Icon size={16} />}
                                                </span>
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="md:col-span-2">
                            <h4 className="font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 text-accent-gold">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 text-primary-300 hover:text-accent-gold transition-colors duration-300 text-sm"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-accent-gold transition-all duration-300 flex-shrink-0" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services Column */}
                        <motion.div variants={itemVariants} className="md:col-span-2">
                            <h4 className="font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 text-accent-gold">
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Residential Design",
                                    "Commercial Spaces",
                                    "Space Planning",
                                    "Furniture Curation",
                                    "3D Visualization",
                                ].map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#services"
                                            className="group flex items-center gap-2 text-primary-300 hover:text-accent-gold transition-colors duration-300 text-sm"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-accent-gold transition-all duration-300 flex-shrink-0" />
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="md:col-span-4">
                            <h4 className="font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 text-accent-gold">
                                Get In Touch
                            </h4>

                            <div className="space-y-4">
                                {/* Address */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="group flex gap-4 items-start p-4 rounded-xl border border-primary-700/50 bg-primary-800/30 hover:border-accent-gold/40 hover:bg-accent-gold/5 transition-all duration-300 cursor-default"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                                        <MapPin size={16} className="text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold mb-1">Studio Location</p>
                                        <p className="text-primary-300 text-sm leading-relaxed">
                                            123 Design Street
                                            <br />
                                            Creative City, CC 12345
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.a
                                    href="tel:+1234567890"
                                    whileHover={{ x: 4 }}
                                    className="group flex gap-4 items-center p-4 rounded-xl border border-primary-700/50 bg-primary-800/30 hover:border-accent-gold/40 hover:bg-accent-gold/5 transition-all duration-300"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                                        <Phone size={16} className="text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold mb-0.5">Call Us</p>
                                        <p className="text-primary-300 group-hover:text-accent-gold transition-colors text-sm">
                                            +1 (234) 567-890
                                        </p>
                                    </div>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:hello@aarya.design"
                                    whileHover={{ x: 4 }}
                                    className="group flex gap-4 items-center p-4 rounded-xl border border-primary-700/50 bg-primary-800/30 hover:border-accent-gold/40 hover:bg-accent-gold/5 transition-all duration-300"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                                        <Mail size={16} className="text-accent-gold" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold mb-0.5">Email Us</p>
                                        <p className="text-primary-300 group-hover:text-accent-gold transition-colors text-sm">
                                            hello@aarya.design
                                        </p>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ✨ Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 py-10 border-y border-primary-700/50"
                    >
                        {[
                            { number: "150+", label: "Projects Completed" },
                            { number: "8+", label: "Years Experience" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "12", label: "Design Awards" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center group">
                                <p className="font-serif text-3xl font-bold text-accent-gold mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {stat.number}
                                </p>
                                <p className="text-primary-400 text-xs uppercase tracking-widest">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* ✨ Bottom Bar */}
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-primary-400 text-sm">
                            <span>©{currentYear}</span>
                            <span className="w-1 h-1 rounded-full bg-accent-gold" />
                            <span>Aarya Pandey</span>
                            <span className="w-1 h-1 rounded-full bg-accent-gold" />
                            <span>All rights reserved</span>
                        </div>

                        <div className="flex items-center gap-1">
                            {[
                                { name: "Privacy Policy", href: "#privacy" },
                                { name: "Terms of Service", href: "#terms" },
                                { name: "Sitemap", href: "#sitemap" },
                            ].map((item, index, arr) => (
                                <span key={item.name} className="flex items-center gap-1">
                                    <a
                                        href={item.href}
                                        className="text-primary-400 hover:text-accent-gold transition-colors text-xs px-2 py-1 rounded hover:bg-accent-gold/10"
                                    >
                                        {item.name}
                                    </a>

                                    {index < arr.length - 1 && (
                                        <span className="w-px h-3 bg-primary-600" />
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* Made with love tag */}
                        <p className="text-primary-500 text-xs flex items-center gap-1">
                            Crafted with{" "}
                            <span className="text-red-400 animate-pulse text-base">♥</span>{" "}
                            & passion
                        </p>
                    </div>
                </div>
            </div>

            {/* ✨ Scroll to Top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-40 group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {/* Layered background */}
                <span className="absolute inset-0 bg-accent-gold" />
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Rotating ring */}
                <span className="absolute inset-0 rounded-full border-2 border-accent-gold/60 scale-110 group-hover:rotate-180 transition-transform duration-500" />
                <svg
                    className="w-5 h-5 text-primary-900 relative z-10 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </motion.button>
        </footer>
    );
};

export default Footer;
