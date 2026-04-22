# Aarya Pandey - Interior Designer Portfolio

A modern, elegant, and responsive portfolio website for an interior designer built with React, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Hero Section**: Full-screen hero with animated text and CTA buttons
- **About Section**: Designer introduction with stats and design philosophy
- **Projects Portfolio**: Grid layout with filtering by category and style
- **Project Details**: Modal with image carousel and before/after slider
- **Services**: Comprehensive service offerings with feature lists
- **Testimonials**: Client reviews with star ratings
- **Contact Form**: Fully functional contact form with validation
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: Neutral color palette with gold accents
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing (prepared)
- **React Icons & Lucide** - Icon libraries
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
interior-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── ProjectDetail.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── sampleData.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd interior-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm build
   ```

The site will open at `http://localhost:3000`

## 📝 Customization

### Update Designer Information

Edit `src/data/sampleData.js`:
- Modify `projects` array for your portfolio
- Update `services` array with your offerings
- Edit `testimonials` with client reviews
- Change `navLinks` for navigation items

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { gold: '#your-color' }
}
```

### Update Images

Replace image URLs in:
- `src/data/sampleData.js` - Project images
- `src/sections/About.jsx` - Profile image
- `src/components/TestimonialCard.jsx` - Client photos

### Customize Contact Information

Edit `src/sections/Contact.jsx` and `src/components/Footer.jsx`:
- Email address
- Phone number
- Office address
- Google Maps embed URL

## 🎯 Component Guide

### Navbar
- Sticky navigation with smooth scroll
- Mobile hamburger menu
- Auto-hide on scroll

### ProjectCard
- Image hover effects
- Category badges
- Smooth transitions

### ServiceCard
- Icon display
- Feature lists
- Hover animations

### ProjectDetail Modal
- Image carousel with navigation
- Before/after comparison slider
- Detailed project information

### Contact Form
- Form validation
- Success message
- Email field integration ready

## 🔄 State Management

The app uses React hooks for state management:
- `selectedProject` - Tracks active project modal
- `formData` - Contact form data
- `isOpen` - Mobile menu state
- `isScrolled` - Navbar scroll position

## 🎬 Animation Features

- **Staggered animations** - Sequential element animations
- **Scroll triggers** - Animations on viewport entry
- **Hover effects** - Interactive element responses
- **Smooth transitions** - CSS transitions and Framer Motion
- **Parallax elements** - Background animations

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast compliance

## 🔍 SEO Optimization

- Meta tags in `public/index.html`
- Semantic HTML elements
- Image alt text on all images
- Open Graph tags for social sharing
- Responsive design (mobile-friendly)

## 📈 Performance Optimization

- Code splitting ready
- Lazy loading images prepared
- CSS minification via Tailwind
- Optimized animations
- Minimal bundle size

## 🌟 Bonus Features

1. **Smooth Scroll Behavior** - Page scrolling with smooth behavior
2. **Scroll to Top Button** - Fixed button in footer
3. **Mobile Menu Toggle** - Responsive navigation
4. **Filter System** - Project filtering by category/style
5. **Image Carousel** - Project detail image navigation
6. **Before/After Slider** - Transformation showcase
7. **Form Validation** - Basic input validation
8. **Google Maps Integration** - Location embed ready

## 🎨 Color Palette

### Primary Colors
- `primary-50` - #faf9f7
- `primary-900` - #2d2a27 (Dark)

### Accent Colors
- `accent-gold` - #d4af37
- `accent-lightGold` - #e8d5b7
- `accent-darkGold` - #b8860b

## 🔤 Typography

- **Serif** - Playfair Display (headings)
- **Sans-serif** - Inter (body text)

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.0",
  "react-icons": "^4.12.0",
  "lucide-react": "^0.294.0",
  "tailwindcss": "^3.3.6",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16"
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### GitHub Pages
```bash
npm run build
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/interior-project"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## 📞 Contact & Form Integration

To enable actual email sending, integrate with:
- **EmailJS** - Direct email from frontend
- **Formspree** - Form backend service
- **Firebase** - Database storage
- **Netlify Forms** - Built-in form handling

Example with EmailJS:
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.send('service_id', 'template_id', formData);
};
```

## 🐛 Troubleshooting

### Styles not loading
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Restart dev server: `npm start`

### Images not showing
- Check image URLs in `sampleData.js`
- Ensure URLs are accessible
- Use relative paths for local images

### Animations not smooth
- Update Framer Motion: `npm install --save framer-motion@latest`
- Check GPU acceleration in CSS
- Reduce animation complexity

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Performance Tips](https://web.dev/performance/)

## 📄 License

This project is available for personal and commercial use.

## 👨‍💻 Author

Created with ❤️ as a modern portfolio template for interior designers.

---

**Happy designing! 🎨✨**
