# Setup & Customization Guide

## 🚀 Complete Setup Instructions

### Step 1: Initial Setup

```bash
# Navigate to project directory
cd "e:\Antigravity projectts\Interior portfolio\interior-project"

# Install all dependencies
npm install

# Start the development server
npm start
```

Your portfolio will open at `http://localhost:3000`

---

## 🎨 Customization Guide

### 1. Update Your Information

#### Profile/Designer Info
Edit `src/sections/About.jsx`:
```javascript
// Change the profile image URL
<motion.img
  src="YOUR_IMAGE_URL"
  alt="Your Name"
  ...
/>

// Change the about text
<motion.p variants={itemVariants} className="...">
  Hello! I'm [Your Name], a passionate interior designer...
</motion.p>
```

#### Navigation Links
Edit `src/data/sampleData.js`:
```javascript
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // Add or modify as needed
];
```

---

### 2. Update Portfolio Projects

Edit `src/data/sampleData.js` in the `projects` array:

```javascript
{
  id: 1,
  title: "Your Project Title",
  category: "Residential", // or Commercial
  style: "Modern", // or Classic
  description: "Brief description",
  shortDescription: "Short version",
  image: "https://your-image-url.com/image.jpg",
  images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ],
  beforeImage: "before.jpg",
  afterImage: "after.jpg",
  duration: "3 months",
  budget: "$45,000",
  tools: ["Material 1", "Material 2"],
  details: "Detailed project description...",
},
```

**Where to get images:**
- [Unsplash](https://unsplash.com) - Free high-quality images
- [Pexels](https://pexels.com) - Free stock photos
- Your own portfolio images
- Professional photography

---

### 3. Update Services

Edit `src/data/sampleData.js` in the `services` array:

```javascript
{
  id: 1,
  title: "Your Service Name",
  icon: "💼", // Use emoji or import icon
  description: "Service description",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
  ]
},
```

---

### 4. Add Testimonials

Edit `src/data/sampleData.js` in the `testimonials` array:

```javascript
{
  id: 1,
  name: "Client Name",
  role: "Client Title/Role",
  text: "Amazing testimonial text about your work...",
  image: "https://client-photo-url.jpg",
  rating: 5,
},
```

---

### 5. Update Contact Information

#### In `src/sections/Contact.jsx`:
```javascript
// Email
<a href="mailto:your.email@domain.com">
  your.email@domain.com
</a>

// Phone
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>

// Address
<p>Your Street Address<br />Your City, ST 12345</p>
```

#### In `src/components/Footer.jsx`:
```javascript
// Update social media links
const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/yourprofile", icon: "Instagram" },
  { name: "Facebook", url: "https://facebook.com/yourpage", icon: "Facebook" },
  // Add more as needed
];
```

#### Google Maps URL
Update the Google Maps embed in `src/sections/Contact.jsx`:
```javascript
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL"
  ...
/>
```

To get your Google Maps embed:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the embed code

---

### 6. Update Brand Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#faf9f7',
        100: '#f5f3f0',
        // ... update all shades
        900: '#2d2a27',
      },
      accent: {
        gold: '#d4af37', // Change to your color
        lightGold: '#e8d5b7',
        darkGold: '#b8860b',
      }
    },
    // ...
  },
}
```

Color Palette Suggestions:
- **Gold/Warm**: `#d4af37`, `#c9a961`, `#b8860b`
- **Silver/Cool**: `#c0c0c0`, `#a8a9ad`, `#808080`
- **Copper**: `#b87333`, `#9d6f47`
- **Bronze**: `#8b7355`, `#6b5d47`

---

### 7. Update Typography

Edit `tailwind.config.js`:

```javascript
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
```

Alternative Font Combinations:
- **Elegant**: Garamond + Raleway
- **Modern**: Montserrat + Open Sans
- **Creative**: Poppins + Quicksand
- **Professional**: Lato + Dosis

Update fonts in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONTS&display=swap" rel="stylesheet">
```

---

### 8. Update SEO Meta Tags

Edit `public/index.html`:

```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="interior design, your services, location">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Interior Designer">
<meta property="og:description" content="Your description">
```

---

### 9. Update Footer Links

Edit `src/components/Footer.jsx`:

```javascript
<a href="/privacy">Privacy Policy</a>
<a href="/terms">Terms of Service</a>
<a href="/sitemap">Sitemap</a>
```

Create corresponding pages in your `src/pages/` directory.

---

## 🔧 Advanced Customization

### Add Google Analytics

1. Install: `npm install react-ga4`

2. Add to `src/App.js`:
```javascript
import ReactGA from 'react-ga4';

useEffect(() => {
  ReactGA.initialize('YOUR_GA_ID');
  ReactGA.send(pageview);
}, []);
```

3. Get ID from [Google Analytics](https://analytics.google.com)

---

### Add Form Backend Integration

#### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

In `src/sections/Contact.jsx`:
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  emailjs.init('YOUR_PUBLIC_KEY');
  
  await emailjs.send('service_id', 'template_id', formData);
  setSubmitStatus('success');
};
```

#### Option 2: Formspree
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  
  setSubmitStatus('success');
};
```

---

### Add Dark Mode

1. Install: `npm install next-themes` (or use custom solution)

2. Create `src/hooks/useDarkMode.js`

3. Implement toggle in Navbar

---

### Lazy Loading Images

Already prepared in `src/utils/helpers.js`. Add to components:

```javascript
<img src={url} className="lazy-load" alt="desc" />
```

---

## 📱 Testing Checklist

### Desktop
- [ ] All sections display correctly
- [ ] Animations smooth and visible
- [ ] Hover effects work
- [ ] Form submission works
- [ ] Links scroll smoothly

### Tablet
- [ ] Menu is responsive
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Layout adapts well

### Mobile
- [ ] Hamburger menu works
- [ ] Images load properly
- [ ] Text size is readable
- [ ] Buttons are touch-friendly
- [ ] No horizontal overflow
- [ ] Forms are usable

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Update all contact information
- [ ] Replace all sample images
- [ ] Update project portfolio
- [ ] Test all links
- [ ] Verify form functionality
- [ ] Check mobile responsiveness
- [ ] Update meta tags/SEO
- [ ] Optimize images
- [ ] Test on real devices
- [ ] Check browser compatibility

---

## 🎯 Performance Tips

1. **Optimize Images**
   - Use tools like TinyPNG or ImageOptim
   - Use WebP format when possible
   - Add lazy loading

2. **Minify CSS/JS**
   - Already done by React build process

3. **Enable Gzip**
   - Configure on your hosting provider

4. **Use CDN**
   - Vercel/Netlify do this automatically

5. **Code Splitting**
   - Ready for React Router implementation

---

## 📚 Useful Resources

### Image Resources
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### Color Tools
- Color Palette Generator: https://coolors.co
- Contrast Checker: https://webaim.org/resources/contrastchecker/

### Typography
- Google Fonts: https://fonts.google.com
- Font Pairing: https://fontjoy.com

### Tools
- TinyPNG: https://tinypng.com
- SEO Checker: https://seobility.net

---

## ❓ FAQ

**Q: How do I add more projects?**
A: Add new objects to the `projects` array in `src/data/sampleData.js`

**Q: How do I change the main color?**
A: Edit the gold color in `tailwind.config.js` under `accent.gold`

**Q: How do I add a blog section?**
A: Create `src/sections/Blog.jsx` and import it in `App.js`

**Q: How do I enable contact form emails?**
A: Integrate with EmailJS, Formspree, or Firebase

**Q: How do I deploy the site?**
A: Use Vercel, Netlify, or any static host. See README.md for details

---

**Need help? Check the README.md for more information!** 🎨✨
