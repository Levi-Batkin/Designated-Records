# Designated Records - Official Website

Modern, responsive website for Designated Records LTD, a UK-based electronic music label.

## Overview

This is a single-page responsive website built with HTML, CSS (Bootstrap 5), and vanilla JavaScript. The site showcases the label's catalog, artist roster, company information, and provides contact/demo submission functionality.

## Features

- **Hero Section**: Immersive video background with clear CTAs
- **Releases Catalog**: Grid layout showcasing latest releases with streaming links
- **Artist Roster**: Featured artists with profiles and social links
- **About Section**: Label story, mission, and team information
- **Company Info**: Official company registration details
- **Contact Form**: Email-based contact form with demo submission guidelines
- **Mobile-First**: Fully responsive design optimized for all devices
- **Modern Design**: Clean, bold aesthetic inspired by contemporary record labels

## Technology Stack

- HTML5 (Semantic markup)
- CSS3 with Custom Properties
- Bootstrap 5.3.2 (via CDN)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.5.1 (Icons)
- Google Fonts (Roboto)

## File Structure

```
.
├── index.html                          # Main single-page website
├── files/
│   ├── css/
│   │   └── modern-styles.css          # Custom styles and design system
│   ├── js/
│   │   └── main.js                    # Interactive enhancements
│   ├── imgs/
│   │   ├── artists/                   # Artist profile images
│   │   ├── logos/                     # Brand logos
│   │   └── staff/                     # Team member images
│   └── videos/
│       ├── designatedRecsVideo.mp4    # Hero background video
│       └── clouds.mp4                 # Alternative background video
├── favicon.ico                        # Site favicon
├── site.webmanifest                   # PWA manifest
└── CNAME                              # Custom domain configuration
```

## Sections

### 1. Hero
- Large video background
- Brand messaging
- Call-to-action buttons (Explore Catalog, Submit Demo)
- Social media links

### 2. Releases
- Latest 6 releases displayed in grid
- Album artwork, artist names, release dates
- Direct Spotify streaming links
- Responsive card layout

### 3. Artists
- Featured 6 artists from roster
- Profile images, genre tags, bios
- Social media links (Instagram, YouTube, Spotify)
- Clean card-based design

### 4. About
- Label history and mission (4 paragraphs)
- Team section featuring:
  - Levi Batkin (Director & Founder)
  - Matthew Chapple (Manager)

### 5. Company Information
- Official registration details:
  - Company Name: Designated Records LTD
  - Company Number: 15891676
  - Registered Address: 20 Wenlock Road, London, N1 7GU
  - Jurisdiction: England and Wales
- Link to Companies House verification

### 6. Contact
- Email contact form (mailto-based)
- Demo submission guidelines:
  - Audio quality requirements
  - Streaming profile links
  - Artist bio requirements
  - Genre tag guidance
- Link to dedicated submissions portal

### 7. Footer
- Social media links (Instagram, YouTube, Spotify)
- Site navigation
- Copyright and legal information
- Contact email

## Design System

### Colors
- Primary: `#1a1a1a` (Dark)
- Secondary: `#ff6347` (Coral Red)
- Accent: `#00d4ff` (Bright Blue)
- Background Light: `#f8f9fa`
- Background Dark: `#1a1a1a`

### Typography
- Font Family: Roboto (400, 500, 700)
- Hero Title: Clamp 3rem - 6rem
- Section Titles: Clamp 2rem - 3rem
- Body Text: 1rem with 1.6 line height

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Deployment

This is a static website that can be deployed to:
- GitHub Pages (current setup with CNAME)
- Netlify
- Vercel
- Any static hosting service

No build process or dependencies required - just upload files and serve.

## Content Management

### Adding New Releases
Duplicate the release card structure in `index.html`:
```html
<div class="col-md-6 col-lg-4">
    <div class="card release-card">
        <img src="[ARTWORK_URL]" class="release-card-img" alt="[TITLE] Cover">
        <div class="release-card-body">
            <h3 class="release-card-title">[TITLE]</h3>
            <p class="release-card-artist">[ARTIST]</p>
            <p class="release-card-meta">[DATE]</p>
            <a href="[SPOTIFY_LINK]" target="_blank" class="btn-stream">
                <i class="fab fa-spotify"></i> Stream Now
            </a>
        </div>
    </div>
</div>
```

### Adding New Artists
Duplicate the artist card structure in `index.html`:
```html
<div class="col-md-6 col-lg-4">
    <div class="card artist-card">
        <img src="files/imgs/artists/[IMAGE]" alt="[NAME]" class="artist-img">
        <h3 class="artist-name">[NAME]</h3>
        <p class="artist-role">[GENRES]</p>
        <p class="artist-bio">[BIO]</p>
        <div class="artist-social">
            <a href="[LINK]" target="_blank">
                <i class="fab fa-[PLATFORM]"></i> [PLATFORM]
            </a>
        </div>
    </div>
</div>
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android 80+

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Sufficient color contrast ratios
- Keyboard navigation support
- Alt text on all images
- Responsive font sizing

## Performance

- Lightweight vanilla JavaScript (no frameworks)
- CDN-hosted libraries for caching
- Optimized images (artist photos < 200KB each)
- Minimal CSS and JS footprint
- Lazy loading for off-screen content

## Contact

- **Website**: [designatedrecords.com](https://designatedrecords.com)
- **Email**: contact@designatedrecords.com
- **Instagram**: [@designatedrecords](https://instagram.com/designatedrecords)
- **YouTube**: [@designatedrecords](https://www.youtube.com/@designatedrecords)
- **Demo Submissions**: [submissions.designatedrecords.com](https://submissions.designatedrecords.com)

## Company Information

**Designated Records LTD**  
Company Number: 15891676  
Registered in England and Wales  
20 Wenlock Road, London, N1 7GU

---

© 2024 Designated Records LTD. All rights reserved.
