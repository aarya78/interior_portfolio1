// Sample data for the portfolio website

// Local project images
import img1 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.17 PM (1).jpeg';
import img2 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.17 PM (2).jpeg';
import img3 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.17 PM (3).jpeg';
import img4 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.17 PM (4).jpeg';
import img5 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.17 PM.jpeg';
import img6 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.43 PM.jpeg';
import img7 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.44 PM (1).jpeg';
import img8 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.44 PM (2).jpeg';
import img9 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.44 PM (3).jpeg';
import img10 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.44 PM (4).jpeg';
import img11 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.44 PM (5).jpeg';
import img12 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.44 PM.jpeg';
import img13 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.57 PM.jpeg';
import img14 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.58 PM (1).jpeg';
import img15 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.58 PM (2).jpeg';
import img16 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.58 PM.jpeg';
import img17 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.43.28 PM (1).jpeg';
import img18 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.43.28 PM (2).jpeg';
import img19 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.43.28 PM.jpeg';
import img20 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.43.29 PM (1).jpeg';
import img21 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.43.29 PM (2).jpeg';
import img22 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.43.29 PM.jpeg';
import img23 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.46.14 PM.jpeg';
import img24 from '../assets/Projects/WhatsApp Image 2026-04-20 at 1.36.58 PM (2).jpeg';
import { Briefcase, Palette, Ruler, Hammer, Sofa, Lightbulb } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "Residential",
    style: "Modern",
    description: "A stunning transformation of a 1500 sq ft apartment with clean lines and contemporary design.",
    shortDescription: "Contemporary living space with minimalist aesthetics",
    image: img1,
    images: [img1, img2, img3, img4],
    beforeImage: img2,
    afterImage: img1,
    imagesMeta: [
      { src: img1, title: 'Bright Minimal Living', description: 'Open-plan living area with natural light and neutral palette', category: 'Living Room' },
      { src: img2, title: 'Sleek Kitchen Nook', description: 'Compact, minimalist kitchen with concealed storage', category: 'Kitchen' },
      { src: img3, title: 'Cozy Bedroom Retreat', description: 'Calm bedroom with layered textures and soft lighting', category: 'Bedroom' },
      { src: img4, title: 'Textured Accent Wall', description: 'Feature wall adding subtle contrast to the minimalist space', category: 'Detail' },
    ],
    duration: "3 months",
    budget: "$45,000",
    tools: ["Minimalist Design", "Neutral Palette", "Smart Storage", "LED Lighting"],
    details: "This residential project focused on creating an open, airy living space while maintaining functionality. We incorporated custom-built storage solutions, neutral color palette with gold accents, and modern lighting fixtures to enhance the overall aesthetics.",
  },
  {
    id: 2,
    title: "Luxury Corporate Office",
    category: "Commercial",
    style: "Modern",
    description: "Executive office suite with premium finishes and sophisticated design elements.",
    shortDescription: "High-end corporate workspace",
    image: img5,
    images: [img5, img6, img7, img8],
    beforeImage: img6,
    afterImage: img5,
    imagesMeta: [
      { src: img5, title: 'Executive Suite Overview', description: 'Spacious workspace with premium materials and tailored lighting', category: 'Office' },
      { src: img6, title: 'Conference Room Elegance', description: 'High-end meeting area with acoustic detailing', category: 'Meeting Room' },
      { src: img7, title: 'Lounge & Reception', description: 'Welcoming reception with sophisticated finishes', category: 'Reception' },
      { src: img8, title: 'Detail: Brass Accents', description: 'Material close-up showcasing brass fixtures', category: 'Detail' },
    ],
    duration: "4 months",
    budget: "$120,000",
    tools: ["Premium Materials", "Ergonomic Furniture", "Executive Design", "Smart Technology"],
    details: "This luxury corporate office was designed to reflect the company's premium brand identity. We utilized high-end materials, ergonomic furniture, and state-of-the-art technology to create a professional yet welcoming atmosphere for executives and clients.",
  },
  {
    id: 3,
    title: "Classic Victorian Villa",
    category: "Residential",
    style: "Classic",
    description: "Elegant restoration of a historic villa maintaining its classic charm with modern comfort.",
    shortDescription: "Heritage design with contemporary comfort",
    image: img9,
    images: [img9, img10, img11, img12],
    beforeImage: img10,
    afterImage: img9,
    imagesMeta: [
      { src: img9, title: 'Grand Parlor', description: 'Restored parlor with period-appropriate furnishings', category: 'Living Room' },
      { src: img10, title: 'Ornate Staircase', description: 'Detail of the restored staircase and railing', category: 'Architectural' },
      { src: img11, title: 'Formal Dining', description: 'Elegant dining area with classic molding and chandelier', category: 'Dining Room' },
      { src: img12, title: 'Preserved Detail', description: 'Close-up of preserved ornate trim and finishes', category: 'Detail' },
    ],
    duration: "6 months",
    budget: "$250,000",
    tools: ["Heritage Restoration", "Period Furniture", "Ornate Details", "Gold Accents"],
    details: "This Victorian villa required careful restoration to maintain its historical integrity while adding modern amenities. We preserved original architectural elements, sourced period-appropriate furnishings, and integrated contemporary comfort features seamlessly.",
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    style: "Modern",
    description: "Sophisticated hotel lobby design creating an inviting and luxurious first impression.",
    shortDescription: "Luxury hospitality space",
    image: img13,
    images: [img13, img14, img15, img16],
    beforeImage: img14,
    afterImage: img13,
    imagesMeta: [
      { src: img13, title: 'Luxurious Lobby', description: 'Inviting lobby with layered seating and ambient lighting', category: 'Lobby' },
      { src: img14, title: 'Check-in Experience', description: 'Stylish reception desk with sculptural lighting', category: 'Reception' },
      { src: img15, title: 'Seating Nook', description: 'Intimate seating arrangement for guests', category: 'Seating' },
      { src: img16, title: 'Material Palette', description: 'Textures and finishes used throughout the lobby', category: 'Detail' },
    ],
    duration: "5 months",
    budget: "$180,000",
    tools: ["Hospitality Design", "Luxury Fixtures", "Ambient Lighting", "Spatial Planning"],
    details: "This boutique hotel lobby was designed to create an unforgettable first impression. We incorporated luxury materials, strategic lighting, and sophisticated furnishings to establish an exclusive and welcoming atmosphere for guests.",
  },
  {
    id: 5,
    title: "Contemporary Home Studio",
    category: "Residential",
    style: "Modern",
    description: "Multi-functional home studio combining workspace and relaxation in perfect harmony.",
    shortDescription: "Creative home workspace",
    image: img17,
    images: [img17, img18, img19, img20],
    beforeImage: img18,
    afterImage: img17,
    imagesMeta: [
      { src: img17, title: 'Flexible Studio Space', description: 'Open studio with dedicated work and relaxation zones', category: 'Studio' },
      { src: img18, title: 'Creative Desk Setup', description: 'Ergonomic workstation with natural light', category: 'Workspace' },
      { src: img19, title: 'Relax Corner', description: 'Comfortable lounging area for breaks and meetings', category: 'Lounge' },
      { src: img20, title: 'Built-in Storage', description: 'Custom storage that keeps the studio clutter-free', category: 'Storage' },
    ],
    duration: "2 months",
    budget: "$35,000",
    tools: ["Home Office Design", "Ergonomic Setup", "Creative Layout", "Natural Light"],
    details: "This contemporary home studio was designed to maximize productivity while maintaining aesthetic appeal. We created distinct zones for work and relaxation, optimized natural light, and incorporated storage solutions tailored to creative needs.",
  },
  {
    id: 6,
    title: "Restaurant Design & Ambiance",
    category: "Commercial",
    style: "Classic",
    description: "Full-service restaurant design with exceptional dining atmosphere and functionality.",
    shortDescription: "Fine dining restaurant concept",
    image: img21,
    images: [img21, img22, img23, img24],
    beforeImage: img22,
    afterImage: img21,
    imagesMeta: [
      { src: img21, title: 'Intimate Dining Room', description: 'Warm, focused lighting over tables for intimate dining', category: 'Dining' },
      { src: img22, title: 'Bar & Service', description: 'Thoughtful bar layout supporting smooth service flow', category: 'Bar' },
      { src: img23, title: 'Table Setting Detail', description: 'Curated table settings and materials', category: 'Detail' },
      { src: img24, title: 'Open Kitchen Peek', description: 'View into the open kitchen and chef station', category: 'Kitchen' },
    ],
    duration: "4 months",
    budget: "$200,000",
    tools: ["Restaurant Design", "Fine Dining Aesthetic", "Acoustic Planning", "Ambient Lighting"],
    details: "This fine dining restaurant was designed to create an elegant and intimate atmosphere. We carefully planned the layout for optimal flow, selected premium finishes, and designed lighting to enhance the dining experience throughout the space.",
  },
];

export const services = [
  {
    id: 1,
    title: "Interior Consultation",
    icon: Briefcase,
    description: "Professional design consultation to understand your vision, space requirements, and aesthetic preferences. We provide expert guidance and personalized recommendations.",
    features: ["Space Analysis", "Design Concepts", "Budget Planning", "Material Selection"]
  },
  {
    id: 2,
    title: "3D Design & Visualization",
    icon: Palette,
    description: "Advanced 3D rendering and visualization services to help you visualize your space before implementation. See your design come to life in stunning detail.",
    features: ["3D Renderings", "Color Schemes", "Material Preview", "Virtual Walkthrough"]
  },
  {
    id: 3,
    title: "Space Planning",
    icon: Ruler,
    description: "Strategic space planning to optimize functionality and flow. We maximize your space while maintaining aesthetic appeal and practical usability.",
    features: ["Layout Design", "Furniture Arrangement", "Traffic Flow", "Zoning"]
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    icon: Hammer,
    description: "Complete renovation and remodeling services from concept to completion. We manage every detail to ensure a smooth transformation of your space.",
    features: ["Full Renovation", "Project Management", "Contractor Coordination", "Quality Assurance"]
  },
  {
    id: 5,
    title: "Furniture & Decor Styling",
    icon: Sofa,
    description: "Curated furniture selection and styling to create a cohesive, beautiful interior that reflects your personal style and lifestyle needs.",
    features: ["Furniture Selection", "Decor Styling", "Shopping Service", "Installation Support"]
  },
  {
    id: 6,
    title: "Lighting Design",
    icon: Lightbulb,
    description: "Expert lighting design that sets the mood and enhances the functionality of your space. Proper lighting transforms any interior.",
    features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Lighting Systems"]
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    text: "Aarya transformed our apartment into a space we love. The attention to detail and creativity was exceptional. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Business Owner",
    text: "The office design perfectly reflects our brand identity. Our team productivity has increased, and clients are impressed. Outstanding work!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Hotel Manager",
    text: "The lobby design has significantly improved our guest experience and booking rates. A truly professional and creative designer.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Wong",
    role: "Entrepreneur",
    text: "Working with Aarya on my home studio was fantastic. The space is both beautiful and highly functional. Exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
  },
];

export const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Modern", label: "Modern" },
  { value: "Classic", label: "Classic" },
];

export const socialLinks = [
  { name: "Instagram", url: "#", icon: "Instagram" },
  { name: "Facebook", url: "#", icon: "Facebook" },
  { name: "LinkedIn", url: "#", icon: "Linkedin" },
  { name: "Pinterest", url: "#", icon: "Pinterest" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
