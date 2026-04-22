# Component & Features Documentation

## 📦 Component Architecture

### Core Components

#### 1. **Navbar** (`src/components/Navbar.jsx`)
Sticky navigation bar with responsive mobile menu.

**Features:**
- Sticky positioning on scroll
- Smooth scroll to sections
- Mobile hamburger menu
- Dynamic styling based on scroll position
- Animation effects

**Props:** None (uses global data)

**State:**
- `isOpen` - Mobile menu toggle
- `isScrolled` - Scroll position tracking

---

#### 2. **Footer** (`src/components/Footer.jsx`)
Complete footer with contact info, social links, and navigation.

**Features:**
- Social media links
- Contact information
- Quick navigation links
- Scroll to top button
- Brand information

**Props:** None

**Special Elements:**
- Fixed scroll-to-top button
- Contact icons with links
- Animated social links

---

#### 3. **ProjectCard** (`src/components/ProjectCard.jsx`)
Individual project card for portfolio grid.

**Features:**
- Image hover animation
- Category badges
- Smooth transitions
- View details button

**Props:**
```javascript
{
  project: Object,      // Project data object
  onViewDetails: Function // Callback for viewing details
}
```

---

#### 4. **ServiceCard** (`src/components/ServiceCard.jsx`)
Service offering card.

**Features:**
- Large emoji icon
- Feature list with bullets
- Hover scale effect
- Animated accent bar

**Props:**
```javascript
{
  service: Object,  // Service data object
  index: Number     // For stagger animation
}
```

---

#### 5. **TestimonialCard** (`src/components/TestimonialCard.jsx`)
Client testimonial card.

**Features:**
- Star rating display
- Client photo
- Quoted text styling
- Role and name display

**Props:**
```javascript
{
  testimonial: Object,  // Testimonial data
  index: Number        // For stagger animation
}
```

---

#### 6. **ProjectDetail** (`src/components/ProjectDetail.jsx`)
Modal for detailed project view.

**Features:**
- Full-screen modal
- Image carousel with navigation
- Before/after comparison slider
- Project information grid
- Tools/materials list
- CTA button to contact

**Props:**
```javascript
{
  project: Object,      // Project data or null
  onClose: Function     // Close modal callback
}
```

---

## 📄 Section Components

#### 1. **Hero** (`src/sections/Hero.jsx`)
Landing section with call-to-action.

**Features:**
- Full-screen layout
- Animated typography
- Multiple CTA buttons
- Scroll indicator
- Decorative animations
- Gradient background

---

#### 2. **About** (`src/sections/About.jsx`)
Designer introduction and statistics.

**Features:**
- Profile image with frame
- Design philosophy quote
- Key statistics
- Bio paragraphs
- Hover effects

---

#### 3. **Projects** (`src/sections/Projects.jsx`)
Portfolio with filtering.

**Features:**
- Grid layout (responsive)
- Filter by category/style
- Project cards
- Smooth animations
- "Explore More" button

**State:**
- `activeFilter` - Current filter selection

---

#### 4. **Services** (`src/sections/Services.jsx`)
Service offerings and process.

**Features:**
- Service cards grid
- Design process timeline
- Service descriptions
- Call-to-action

---

#### 5. **Testimonials** (`src/sections/Testimonials.jsx`)
Client reviews and ratings.

**Features:**
- Testimonial cards
- Summary statistics
- Star ratings
- Client photos

---

#### 6. **Contact** (`src/sections/Contact.jsx`)
Contact form and information.

**Features:**
- Contact form with validation
- Contact information cards
- Business hours
- Google Maps embed
- Success message
- Email integration ready

**State:**
- `formData` - Form input values
- `isSubmitting` - Form submission state
- `submitStatus` - Success/error status

---

## 🎨 Styling System

### Tailwind Custom Classes

```css
.btn-primary          /* Primary button style */
.btn-secondary        /* Secondary button style */
.btn-outline          /* Outline button style */
.section-title        /* Section heading style */
.section-subtitle     /* Subtitle style */
.section-padding      /* Standard section padding */
.container-custom     /* Max-width container */
.card-hover           /* Card hover effects */
.gradient-text        /* Gradient text effect */
```

---

### Color Scheme

**Primary Colors:**
- `primary-50` - Background light
- `primary-900` - Text dark

**Accent Colors:**
- `accent-gold` - Primary accent (#d4af37)
- `accent-lightGold` - Light accent
- `accent-darkGold` - Dark accent

---

## 🎬 Animation Library

### Framer Motion Patterns

**Container Variants:**
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

**Item Variants:**
```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};
```

### Available Animations
- Fade in/out
- Slide up/down
- Scale on hover
- Stagger children
- Rotate animations
- Custom easing

---

## 📊 Data Structure

### Projects Object
```javascript
{
  id: Number,
  title: String,
  category: String,        // "Residential" or "Commercial"
  style: String,           // "Modern" or "Classic"
  description: String,
  shortDescription: String,
  image: String,           // Main image URL
  images: Array<String>,   // Carousel images
  beforeImage: String,
  afterImage: String,
  duration: String,        // e.g., "3 months"
  budget: String,          // e.g., "$45,000"
  tools: Array<String>,
  details: String
}
```

### Service Object
```javascript
{
  id: Number,
  title: String,
  icon: String,            // Emoji or icon name
  description: String,
  features: Array<String>
}
```

### Testimonial Object
```javascript
{
  id: Number,
  name: String,
  role: String,
  text: String,
  image: String,           // Photo URL
  rating: Number           // 1-5 stars
}
```

---

## 🔄 State Management

### App Level State
```javascript
const [selectedProject, setSelectedProject] = useState(null);
```

### Local Component State

**Navbar:**
- `isOpen` - Menu toggle
- `isScrolled` - Scroll tracking

**Projects:**
- `activeFilter` - Filter selection

**Contact:**
- `formData` - Form inputs
- `isSubmitting` - Submit loading
- `submitStatus` - Submit result

---

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 1024px, 1280px
- Flexible grid layouts
- Touch-friendly buttons

### 2. Performance
- Optimized animations
- Lazy loading ready
- Code splitting prepared
- Minimal bundle size

### 3. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast

### 4. User Experience
- Smooth scrolling
- Hover effects
- Loading states
- Success feedback

### 5. SEO
- Meta tags
- Semantic structure
- Image alt text
- Social sharing tags

---

## 🔌 Integration Points

### Contact Form Integration
The contact form is ready for integration with:
- EmailJS
- Formspree
- Firebase
- Backend API

Current implementation logs to console.

### Social Media Links
Update URLs in `sampleData.js`:
```javascript
const socialLinks = [
  { name: "Instagram", url: "YOUR_URL", icon: "Instagram" },
  { name: "Facebook", url: "YOUR_URL", icon: "Facebook" },
  // ...
];
```

### Google Maps
Update embed URL in `src/sections/Contact.jsx`

---

## 🚀 Performance Metrics

Target Metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Optimization Strategies:
- Image lazy loading
- Code splitting
- Minified CSS/JS
- Efficient animations
- CDN delivery

---

## 🐛 Common Issues & Solutions

### Animation lag on mobile
**Solution:** Reduce animation complexity, use `will-change` CSS

### Images not loading
**Solution:** Check URL accessibility, verify image format

### Scroll performance poor
**Solution:** Optimize image sizes, throttle scroll events

### Form not submitting
**Solution:** Integrate backend service, check browser console

---

## 📚 Component Usage Examples

### Using ProjectCard
```javascript
import ProjectCard from './ProjectCard';

<ProjectCard 
  project={projectData}
  onViewDetails={setSelectedProject}
/>
```

### Using ServiceCard
```javascript
import ServiceCard from './ServiceCard';

{services.map((service, idx) => (
  <ServiceCard 
    key={service.id}
    service={service}
    index={idx}
  />
))}
```

### Using ProjectDetail
```javascript
import ProjectDetail from './ProjectDetail';

<ProjectDetail
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>
```

---

## 🎨 Customization Points

### Easy to Change
- Colors in `tailwind.config.js`
- Fonts in `tailwind.config.js`
- Data in `sampleData.js`
- Copy in component JSX

### Moderate Complexity
- Add new sections
- Modify animations
- Add new components
- Implement routing

### Advanced
- State management upgrade (Redux/Zustand)
- Backend integration
- Database setup
- Authentication system

---

## 📖 File Import Map

```
App.js
├── Navbar.jsx
├── Hero.jsx
├── About.jsx
├── Projects.jsx (uses ProjectCard.jsx)
├── Services.jsx (uses ServiceCard.jsx)
├── Testimonials.jsx (uses TestimonialCard.jsx)
├── Contact.jsx
├── Footer.jsx
└── ProjectDetail.jsx (modal)

All sections use:
├── sampleData.js (content)
└── Framer Motion (animations)
```

---

**Happy coding! 🚀**
