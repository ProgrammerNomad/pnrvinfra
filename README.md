# PNRV Infra

**Making Ideas Concrete**

Professional construction and infrastructure development services delivering excellence and innovation.

🌐 **Live Site:** [https://www.pnrvinfra.com](https://www.pnrvinfra.com)  
📦 **Repository:** [https://github.com/ProgrammerNomad/pnrvinfra](https://github.com/ProgrammerNomad/pnrvinfra)

## About

PNRV Infra specializes in world-class construction and infrastructure development. We transform innovative concepts into concrete reality, creating spaces where people come first and communities thrive.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **TypeScript:** Full type safety

## Brand Colors

- **Primary (Brick Brown):** #B45032
- **Secondary (Saffron Orange):** #F08232
- **Accent (Leaf Green):** #00A050
- **Foreground (Dark Brown):** #5A2415

## 📁 Project Structure

```
pnrvinfra/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── projects/            # Projects page
│   ├── contact/             # Contact page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Stats.tsx        # Statistics display

## Project Structure

```
pnrvinfra/
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── projects/            # Projects portfolio page
│   ├── contact/             # Contact form page
│   └── globals.css          # Tailwind v4 theme configuration
├── components/
│   ├── layout/              # Header and Footer
│   ├── sections/            # Hero, Services, Stats, CTA
│   └── ui/                  # shadcn/ui components
├── lib/                     # Utility functions
└── public/
    └── images/              # Logo and assets
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
# Static files exported to /out folder

# Start production server (optional)
npm start
```

## Features

- Responsive design for all devices
- Static site generation for optimal performance
- SEO optimized with Open Graph & Twitter Cards
- Brand-consistent color scheme from logo
- Modern UI components from shadcn/ui
- Accessible and performant
- TypeScript for type safety

## Pages

- **Home** - Hero, services overview, statistics, CTA
- **About** - Company information and values
- **Services** - Detailed service offerings
- **Projects** - Portfolio showcase with filtering
- **Contact** - Contact form and information

## Deployment

The `/out` folder contains the complete static site ready for deployment to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

Simply upload the contents of `/out` to your hosting provider.

## License

© 2026 PNRV Infra. All rights reserved.
- ✅ SEO-friendly
- ✅ TypeScript for type safety
- ✅ Modern UI with Tailwind CSS
- ✅ Accessible components from shadcn/ui
- ✅ Mobile-first approach

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

Copyright © 2026 PNRV Infra. All rights reserved.

