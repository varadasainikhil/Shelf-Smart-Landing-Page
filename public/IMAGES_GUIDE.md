# Image Assets Guide

This document outlines all the image assets needed for the Shelf Smart landing page and their specifications.

## Required Images

### 1. Favicon & App Icons

**Location:** `/public/images/`

- **favicon.svg** (32x32px)
  - SVG format for best quality
  - Should contain the Shelf Smart logo/icon
  - Used in browser tabs

- **apple-touch-icon.png** (180x180px)
  - PNG format
  - Used when users add the site to their iOS home screen
  - Should have rounded corners (system will apply mask)

### 2. Social Media Cards

**Location:** `/public/images/`

- **og-image.png** (1200x630px)
  - PNG or JPG format
  - Used for Open Graph (Facebook, LinkedIn)
  - Should include: app logo, tagline, and mockup
  - Keep text large and legible
  - Safe zone: keep important content 100px from edges

- **twitter-card.png** (1200x600px)
  - PNG or JPG format
  - Used for Twitter/X cards
  - Similar to og-image but with Twitter-optimized aspect ratio
  - Can be same as og-image with slight cropping

### 3. Hero Section

**Location:** `/public/images/hero/`

- **app-mockup.png** (800x1600px recommended)
  - PNG format with transparency
  - iPhone mockup showing the home screen of the app
  - High resolution for retina displays (2x or 3x)
  - Background should be transparent or match the hero background
  - Alternative: Use actual iPhone frame with screenshot inside

### 4. App Screenshots

**Location:** `/public/images/screenshots/`

All screenshots should be:
- Actual iPhone screenshots (recommended: iPhone 14 Pro - 1179x2556px)
- PNG format
- Include status bar for authenticity
- Properly cropped and aligned

Required screenshots:
1. **home-dashboard.png** - Main products list view
2. **product-details.png** - Individual product detail screen
3. **recipe-discovery.png** - Recipe recommendations screen
4. **notifications.png** - Notifications or settings screen

### 5. Feature Section (Optional)

**Location:** `/public/images/features/`

If you want to replace icon-based features with images:
- **feature-[name].png** (400x400px)
  - PNG format
  - Can be screenshots or illustrations
  - Should clearly represent the feature

## Image Optimization Guidelines

### Best Practices

1. **Compression**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Aim for <200KB per image for screenshots
   - Aim for <100KB for icons and small assets

2. **Format Selection**
   - **SVG**: Icons, logos (scalable, smallest file size)
   - **PNG**: Screenshots with transparency, icons with transparency
   - **JPG**: Photos, complex screenshots without transparency
   - **WebP**: Modern format for better compression (provide fallbacks)

3. **Responsive Images**
   - Provide 1x, 2x, and 3x versions for retina displays
   - Example: `app-mockup.png`, `app-mockup@2x.png`, `app-mockup@3x.png`

4. **Alt Text**
   - Always provide descriptive alt text in the code
   - Describe what's in the image, not just "app screenshot"

## How to Replace Placeholders

### Step 1: Prepare Your Images
Follow the specifications above and optimize all images.

### Step 2: Add Images to Public Folder
Place images in the appropriate folders under `/public/images/`

### Step 3: Update Component References

**Hero Component** (`src/components/Hero.jsx`):
```jsx
// Replace the SVG placeholder with:
<img
  src="/images/hero/app-mockup.png"
  alt="Shelf Smart app interface showing grocery tracking"
  loading="eager"
/>
```

**Screenshots Component** (`src/components/Screenshots.jsx`):
```jsx
// Update the screenshots array with actual images:
const screenshots = [
  {
    title: 'Home Dashboard',
    image: '/images/screenshots/home-dashboard.png',
    alt: 'Shelf Smart home dashboard showing products organized by expiry date',
  },
  // ... more screenshots
];

// In the JSX, replace the SVG with:
<img
  src={screenshots[activeIndex].image}
  alt={screenshots[activeIndex].alt}
  loading="lazy"
/>
```

**Favicon** (Already configured in `index.html`):
- Simply add your `favicon.svg` to `/public/images/`
- Add `apple-touch-icon.png` to `/public/images/`

**Social Media Cards** (Already configured in `index.html`):
- Add `og-image.png` and `twitter-card.png` to `/public/images/`
- Update URLs in `index.html` meta tags if your domain changes

## Tools & Resources

### Image Creation
- **Figma**: For designing mockups and cards
- **Sketch**: Mac-only design tool
- **Canva**: Online tool with templates

### Screenshot Tools
- **iOS Simulator**: Xcode's built-in simulator
- **Real Device**: Use iPhone's screenshot feature (best quality)
- **Mockup Generators**:
  - MockuPhone (free)
  - Placeit (paid)
  - Shotsnapp (free)

### Optimization Tools
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/ (Mac)
- **SVGOMG**: https://jakearchibald.github.io/svgomg/ (for SVGs)

## Checklist

- [ ] Favicon (SVG)
- [ ] Apple Touch Icon (PNG, 180x180)
- [ ] Open Graph Image (PNG, 1200x630)
- [ ] Twitter Card Image (PNG, 1200x600)
- [ ] Hero App Mockup (PNG, high-res)
- [ ] Screenshot 1: Home Dashboard
- [ ] Screenshot 2: Product Details
- [ ] Screenshot 3: Recipe Discovery
- [ ] Screenshot 4: Notifications
- [ ] All images optimized (<200KB each)
- [ ] Alt text updated in components
- [ ] Images tested on mobile and desktop
- [ ] Dark mode appearance checked

## Questions?

If you need help with image specifications or have questions about implementing them, refer to the main README.md or check the component files for current placeholder implementations.
