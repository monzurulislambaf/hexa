# Hexa Engineering Limited - Corporate Website

A modern, production-ready Next.js website for Hexa Engineering Limited, a premier engineering consultancy firm in Bangladesh specializing in energy efficiency, safety compliance, and sustainability.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Sliders:** Swiper.js
- **Forms:** React Hook Form + Zod
- **State:** Zustand
- **Database:** MongoDB Atlas (Mongoose ODM)

## Features

- 🎨 Modern, premium corporate design
- 📱 Fully responsive (mobile-first)
- ⚡ Server-side rendering & static generation
- 🔍 SEO optimized (sitemap, robots.txt, metadata)
- 🎯 Swiper.js sliders (Hero, Projects, Services, Testimonials)
- 📝 Contact form with validation
- 🔒 Admin dashboard with authentication
- 📊 Certificate verification system
- 🌙 Dark mode support
- ♿ Accessibility friendly

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm
- PostgreSQL database (optional for demo)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/hexa-engineering.git
cd hexa-engineering

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Seed database (optional, requires MongoDB)
npm run db:seed

# Run development server
npm run dev
```

### Environment Variables

Create a `.env` file:

```env
# MongoDB Atlas
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/hexa?retryWrites=true&w=majority"

# Auth.js
AUTH_SECRET="your-secret-here"

# Site
NEXT_PUBLIC_SITE_URL="https://hexa-bd.com"
```

## Project Structure

```
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── resources/
│   │   └── certificate-verification/
│   ├── admin/
│   ├── api/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── navbar/
│   ├── footer/
│   ├── sliders/
│   ├── sections/
│   ├── ui/
│   └── animations/
├── lib/
│   ├── constants.ts
│   ├── data.ts
│   └── utils.ts
│   └── mongodb.ts
├── models/
│   ├── User.ts
│   ├── Contact.ts
│   ├── Project.ts
│   ├── BlogPost.ts
│   ├── Certificate.ts
│   └── Service.ts
├── scripts/
│   └── seed.ts
└── public/
    └── images/
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, projects, testimonials |
| `/about` | Company profile, mission, vision, values |
| `/services` | All services overview |
| `/services/energy-audit` | Energy Audit & Efficiency |
| `/services/safety-compliance` | Safety & Regulatory Compliance |
| `/services/sustainability` | Sustainability & Green Building |
| `/services/etp-stp` | ETP & STP Solutions |
| `/services/carbon-accounting` | Carbon Accounting |
| `/projects` | Project portfolio |
| `/blog` | Engineering articles |
| `/contact` | Contact form & information |
| `/resources` | PDF resources & guides |
| `/certificate-verification` | Verify certificates |
| `/admin` | Admin dashboard |

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Database Setup (Production)

```bash
# Seed database with demo data
npm run db:seed
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

© 2025 Hexa Engineering Limited. All rights reserved.
