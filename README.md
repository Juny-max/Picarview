# Picarview Landing Page

A premium creative agency landing page built with Next.js 14, featuring a "Liquid Glass" aesthetic with smooth animations and 3D effects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + clsx + tailwind-merge
- **Animation**: GSAP + ScrollTrigger
- **Smooth Scroll**: @studio-freight/react-lenis
- **3D Effects**: React Three Fiber + Drei
- **Icons**: Lucide React
- **Typography**: Local fonts (Metropolis, Bacalisties)

## Features

- 🎨 Dark mode with Blue/Orange gradient theme
- ✨ Liquid Glass 3D hero background
- 🎭 "Curtain" scroll effect (pinned hero with overlay content)
- 📝 Masked text reveal animations
- 🌊 Smooth inertia scrolling
- 📱 Fully responsive design
- ⚡ Premium hover effects and transitions

## Design System

### Colors
- **Background**: Deep Black (#050505)
- **Text**: White (#ffffff) and Zinc (#a1a1aa)
- **Accent Blue**: #3b82f6
- **Accent Orange**: #f97316

### Typography
- **Primary Headings**: Metropolis-Black (Bold, uppercase, industrial)
- **Accents/Subtitles**: Bacalisties (Script, elegant)
- **Body**: Metropolis-Bold (Clean sans-serif)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
picarview-landing/
├── public/
│   └── fonts/
│       ├── Metropolis-Black.otf
│       ├── Metropolis-Bold.otf
│       └── Bacalisties.ttf
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ContentSections.tsx
│   │   ├── Navbar.tsx
│   │   ├── LenisProvider.tsx
│   │   └── LiquidGlassBackground.tsx
│   └── lib/
│       └── utils.ts
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Key Implementation Details

### Curtain Effect
The hero section is `position: fixed` with `z-index: 0`, while the content section has `position: relative` with `z-index: 10` and `margin-top: 100vh`. This creates the effect of content sliding up over the hero.

### Smooth Scroll
Lenis provides smooth inertia scrolling throughout the page, creating that "luxury" feel.

### 3D Liquid Effect
React Three Fiber renders liquid glass blobs using `MeshTransmissionMaterial` from Drei, creating the premium visual effect.

### Text Animations
GSAP handles all text reveal animations with masked overflow containers and `power4.out` easing for smooth, premium transitions.

## License

© 2024 Picarview. All rights reserved.
