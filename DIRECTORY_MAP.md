# Project Directory Map & Quick Reference

## 📂 Full Directory Tree

```
interior-project/
│
├── 📦 Configuration Files
│   ├── package.json              # Project dependencies and scripts
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   └── .gitignore               # Git ignore rules
│
├── 📚 Documentation
│   ├── README.md                # Main README
│   ├── SETUP_GUIDE.md          # Setup & customization guide
│   ├── COMPONENTS_GUIDE.md     # Component documentation
│   └── PROJECT_SUMMARY.md      # This summary
│
├── 📁 public/
│   └── index.html              # HTML entry point (SEO meta tags included)
│
├── 📁 src/
│   │
│   ├── index.js                # React entry point
│   ├── index.css               # Global styles (Tailwind + custom)
│   ├── App.js                  # Main App component
│   │
│   ├── 📁 components/          # Reusable components
│   │   ├── Navbar.jsx          # Navigation bar (sticky)
│   │   ├── Footer.jsx          # Footer component
│   │   ├── ProjectCard.jsx     # Project card for grid
│   │   ├── ServiceCard.jsx     # Service offering card
│   │   ├── TestimonialCard.jsx # Testimonial card
│   │   └── ProjectDetail.jsx   # Project detail modal
│   │
│   ├── 📁 sections/            # Page sections
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── About.jsx           # About designer section
│   │   ├── Projects.jsx        # Portfolio section
│   │   ├── Services.jsx        # Services section
│   │   ├── Testimonials.jsx    # Testimonials section
│   │   └── Contact.jsx         # Contact section
│   │
│   ├── 📁 data/                # Data and constants
│   │   └── sampleData.js       # All dummy data (projects, services, etc.)
│   │
│   └── 📁 utils/               # Utility functions
│       └── helpers.js          # Helper functions
│
└── 🚀 Ready to Deploy!
```

---

## 🗂️ File Organization Guide

### When to Edit Each File

#### Content Updates
- **Projects**: Edit `src/data/sampleData.js` - `projects` array
- **Services**: Edit `src/data/sampleData.js` - `services` array
- **Testimonials**: Edit `src/data/sampleData.js` - `testimonials` array
- **Navigation Links**: Edit `src/data/sampleData.js` - `navLinks` array
- **Social Links**: Edit `src/data/sampleData.js` - `socialLinks` array

#### Contact Information
- **Email/Phone**: Edit `src/sections/Contact.jsx`
- **Address**: Edit `src/sections/Contact.jsx` and `src/components/Footer.jsx`
- **Google Maps**: Edit `src/sections/Contact.jsx`
- **Business Hours**: Edit `src/sections/Contact.jsx`

#### Designer Information
- **Bio**: Edit `src/sections/About.jsx`
- **Profile Image**: Edit `src/sections/About.jsx`
- **Designer Name**: Edit `src/sections/Hero.jsx` and navbar
- **Tagline**: Edit `src/sections/Hero.jsx`

#### Styling & Colors
- **Colors**: Edit `tailwind.config.js` - colors section
- **Fonts**: Edit `tailwind.config.js` - fontFamily section
- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Edit within `.jsx` files

#### SEO & Meta Tags
- **Meta Tags**: Edit `public/index.html`
- **Page Title**: Edit `public/index.html` - title tag
- **Meta Description**: Edit `public/index.html`
- **OG Tags**: Edit `public/index.html`

---

## 🎯 Component Location Reference

### Components Directory (`src/components/`)
```
components/
├── Navbar.jsx
│   ├── Used in: App.js
│   ├── Props: None
│   └── Features: Sticky nav, mobile menu
│
├── Footer.jsx
│   ├── Used in: App.js
│   ├── Props: None
│   └── Features: Contact info, social links
│
├── ProjectCard.jsx
│   ├── Used in: Projects.jsx
│   ├── Props: project, onViewDetails
│   └── Features: Image hover, badges
│
├── ServiceCard.jsx
│   ├── Used in: Services.jsx
│   ├── Props: service, index
│   └── Features: Icon, features list
│
├── TestimonialCard.jsx
│   ├── Used in: Testimonials.jsx
│   ├── Props: testimonial, index
│   └── Features: Star rating, photo
│
└── ProjectDetail.jsx
    ├── Used in: App.js (modal)
    ├── Props: project, onClose
    └── Features: Carousel, slider
```

### Sections Directory (`src/sections/`)
```
sections/
├── Hero.jsx
│   ├── Content: Landing area, CTA
│   ├── Edit for: Designer name, tagline, intro
│   └── Features: Full-screen, animations
│
├── About.jsx
│   ├── Content: Designer bio, stats
│   ├── Edit for: Bio, profile image, stats
│   └── Features: Profile image, philosophy quote
│
├── Projects.jsx
│   ├── Content: Portfolio grid
│   ├── Edit for: Projects data (via sampleData.js)
│   └── Features: Filtering, grid layout
│
├── Services.jsx
│   ├── Content: Service offerings
│   ├── Edit for: Services data (via sampleData.js)
│   └── Features: Service cards, process timeline
│
├── Testimonials.jsx
│   ├── Content: Client reviews
│   ├── Edit for: Testimonials data (via sampleData.js)
│   └── Features: Star ratings, photos
│
└── Contact.jsx
    ├── Content: Contact form & info
    ├── Edit for: Contact details, form handling
    └── Features: Form validation, maps embed
```

---

## 🔄 Data Flow

### Page Load Flow
```
App.js
├── Renders Navbar
├── Renders Hero
├── Renders About
├── Renders Projects (displays projects from sampleData.js)
├── Renders Services (displays services from sampleData.js)
├── Renders Testimonials (displays testimonials from sampleData.js)
├── Renders Contact
└── Renders Footer

When user clicks:
├── Project → ProjectDetail modal opens
├── Contact button → Scroll to Contact section
├── Social link → Opens in new window
└── Navbar link → Smooth scroll to section
```

### Component Composition
```
App.js
├── <Navbar />
├── <Hero />
├── <About />
├── <Projects>
│   ├── <ProjectCard /> (multiple)
│   └── <ProjectDetail /> (modal)
├── <Services>
│   └── <ServiceCard /> (multiple)
├── <Testimonials>
│   └── <TestimonialCard /> (multiple)
├── <Contact />
└── <Footer />
```

---

## 📊 Data Structure Reference

### Minimal Project Object for sampleData.js
```javascript
{
  id: 1,
  title: "Project Name",
  category: "Residential",      // Required for filtering
  style: "Modern",              // Required for filtering
  description: "...",
  shortDescription: "...",
  image: "url",                 // Main image
  images: ["url1", "url2"],     // Carousel images
  beforeImage: "url",
  afterImage: "url",
  duration: "3 months",
  budget: "$45,000",
  tools: ["Tool1", "Tool2"],
  details: "..."
}
```

### Minimal Service Object
```javascript
{
  id: 1,
  title: "Service Name",
  icon: "🎨",                   // Can be emoji
  description: "...",
  features: ["Feature1", "Feature2"]
}
```

### Minimal Testimonial Object
```javascript
{
  id: 1,
  name: "Client Name",
  role: "Client Role",
  text: "Review text...",
  image: "photo_url",
  rating: 5
}
```

---

## 🎯 Common Edits Quick Reference

### Change Colors
**File**: `tailwind.config.js`
```javascript
accent: {
  gold: '#YOUR_COLOR',  // Change here
}
```

### Add Project
**File**: `src/data/sampleData.js`
```javascript
export const projects = [
  // ... existing projects
  { id: 7, title: "New Project", ... },  // Add here
];
```

### Update Email
**File**: `src/sections/Contact.jsx`
```javascript
<a href="mailto:YOUR_EMAIL@domain.com">
```

### Change Designer Name
**File**: `src/sections/Hero.jsx`
```javascript
<h1 className="...">YOUR NAME</h1>
```

### Update Profile Image
**File**: `src/sections/About.jsx`
```javascript
src="YOUR_IMAGE_URL"
```

---

## 🚀 Development Workflow

### First Time Setup
```bash
cd interior-project
npm install
npm start
```

### Regular Development
```bash
# Terminal 1: Start dev server
npm start

# Terminal 2: Code editing
# Make changes in src/ files
# Browser auto-refreshes
```

### Build for Production
```bash
npm run build
# Creates optimized build/ folder
# Deploy contents to hosting
```

---

## 📱 Responsive Design Breakpoints

```
Mobile  < 640px     (sm)
Tablet  640-1024px  (md)
Desktop > 1024px    (lg)
Large   > 1280px    (xl)
```

Each component uses:
- `md:` for tablet styles
- `lg:` for desktop styles
- Base styles for mobile

---

## 🎬 Animation Locations

### Animations in Each Section
- **Hero**: Text animations, scroll indicator
- **About**: Image hover, stat counters
- **Projects**: Card hover, filter transitions
- **Services**: Card hover, accent bar animation
- **Testimonials**: Quote animations, ratings
- **Contact**: Form focus effects
- **Footer**: Social link hover, scroll-to-top

### Global Animations
- Navbar scroll effect
- Smooth page scroll
- Staggered animations
- Hover transitions

---

## 🔌 Integration Points

### Contact Form (in Contact.jsx)
Currently logs to console. To integrate:
- EmailJS
- Formspree
- Firebase
- Custom backend

### Social Links (in sampleData.js)
Update URLs for:
- Instagram
- Facebook
- LinkedIn
- Pinterest

### Google Maps (in Contact.jsx)
Update embed URL with your location

---

## 📈 Performance Files

### CSS Optimization
- `src/index.css` - Tailwind directives
- `tailwind.config.js` - Unused CSS purging

### JavaScript Optimization
- Code splitting prepared
- Lazy loading ready
- Tree shaking enabled

### Image Optimization
- Lazy loading attributes prepared
- Responsive images recommended
- Compression before upload

---

## 🐛 Debugging Tips

### Check Browser Console
```javascript
// Open DevTools (F12)
// Check Console for errors
```

### Common File Locations
- If component doesn't render: Check import path
- If styles missing: Check className spelling
- If data not showing: Check sampleData.js

### Quick Fixes
- Clear cache: `npm cache clean --force`
- Restart server: Ctrl+C then `npm start`
- Force reload page: Ctrl+Shift+R

---

## 📚 File Purpose Summary

| File | Purpose | Edit When |
|------|---------|-----------|
| package.json | Dependencies | Adding new packages |
| tailwind.config.js | Colors/fonts | Changing brand colors |
| src/index.css | Global styles | Custom CSS needed |
| sampleData.js | All content | Updating projects/services |
| Navbar.jsx | Navigation | Changing nav behavior |
| Hero.jsx | Landing area | Changing tagline/name |
| About.jsx | Designer bio | Updating about section |
| Projects.jsx | Portfolio | Changing filter options |
| Services.jsx | Offerings | Adding new services |
| Contact.jsx | Contact form | Updating contact info |
| Footer.jsx | Footer | Changing footer info |

---

## ✅ Ready to Start?

1. ✅ All files created
2. ✅ Documentation complete
3. ✅ Ready for `npm install`
4. ✅ Ready for `npm start`

**Next Step**: Follow SETUP_GUIDE.md! 🚀

---

## 🎓 Learning Path

1. **Understand Structure** - Read this file
2. **Setup Project** - Follow SETUP_GUIDE.md
3. **Learn Components** - Read COMPONENTS_GUIDE.md
4. **Customize Content** - Edit sampleData.js
5. **Customize Styling** - Edit tailwind.config.js
6. **Test Everything** - Run npm start
7. **Deploy** - Follow README.md deployment section

---

**You've got this! 🎉**
