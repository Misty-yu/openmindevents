# Event Images Setup Guide

## Overview
The "Our Previous Events" section on the homepage displays 5 event images in a horizontal scrolling carousel. The component now has intelligent fallback handling.

## Image Setup

### Directory
Images should be placed in: `/public/images/`

### File Names
- `event1.jpg` - OpenMind Summit 2025 - Stage & Podium
- `event2.jpg` - OpenMind Team Leaders & Networking  
- `event3.jpg` - OpenMind Speaker Presentation
- `event4.jpg` - OpenMind Keynote & Audience
- `event5.jpg` - OpenMind Conference & Attendees

### Image Specifications
- **Format**: JPG or PNG
- **Dimensions**: 800x500px (minimum), 1600x1000px (recommended)
- **Aspect Ratio**: 16:9 (landscape)
- **Quality**: 85% JPEG quality or higher
- **File Size**: < 500KB per image

## How the Component Works

### 1. Primary Loading
- Component first attempts to load images from `/images/event1.jpg` through `/images/event5.jpg`

### 2. Automatic Fallback
If local images are not found or fail to load:
- Component automatically falls back to Unsplash professional event photography
- No broken images displayed to users
- Smooth degradation with matching alt text

### 3. Error Handling
- Image load errors trigger fallback URL
- Failed fallbacks show a graceful placeholder
- No console errors or broken image indicators

## Features

### Visual Enhancements
- ✅ Brightness & contrast optimization (brightness-110, contrast-110)
- ✅ Shadow effects with hover state
- ✅ Scale animation on hover (hover:scale-105)
- ✅ Smooth transitions (300ms)
- ✅ Lazy loading enabled

### Responsive Design
- **Mobile**: `w-72` (288px)
- **Tablet**: `sm:w-80` (320px)
- **Desktop**: `lg:w-96` (384px)

### Auto-Scrolling
- Continuous horizontal scroll at 0.5px/frame
- Loops infinitely
- Smooth performance with requestAnimationFrame

## How to Upload Images

### Option 1: Local Development
1. Place your 5 event images in `/public/images/`
2. Name them: `event1.jpg`, `event2.jpg`, etc.
3. Images will automatically display after next build

### Option 2: Vercel Deployment
1. Commit images to git repository
2. Push to your Vercel project
3. Images deploy automatically with your code

### Option 3: During Development
1. Edit images locally in `/public/images/`
2. Restart dev server to see changes
3. Images will be served at `/images/event1.jpg`, etc.

## Testing

### Local Preview
```bash
npm run dev
# Navigate to homepage and scroll to "Our Previous Events"
# Images should display with animation
```

### Build Verification
```bash
npm run build
# Verify no build errors occur
# Check that .next/static/public includes image references
```

### Troubleshooting

**Images not showing?**
1. Verify file names are correct (event1.jpg - event5.jpg)
2. Check files are in `/public/images/` directory
3. Images should be 800x500px minimum
4. Try clearing browser cache (Cmd+Shift+R or Ctrl+Shift+R)

**Fallback images showing?**
1. Local images not found or failed to load
2. Check browser Network tab for 404 errors
3. Verify file paths and naming
4. Check file permissions (should be readable)

**Performance issues?**
1. Reduce image file sizes (target < 500KB)
2. Use JPEG format for photos
3. Ensure images are optimized before upload
4. Consider using image compression tools

## Component Location
`/components/home/past-events.tsx`

## Integration
The component is integrated into the homepage:
`/app/page.tsx`

---

**Last Updated**: 2026-06-05
**Component**: EventImageCard + PastEvents
**Build Status**: ✓ Passing
