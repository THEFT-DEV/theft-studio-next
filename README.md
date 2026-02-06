# THEFT Studio - Next.js Website

Modern Next.js website for THEFT Studio design agency, migrated from WordPress.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit: http://localhost:3000

## 📁 Project Structure

```
theft-studio-next/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── portfolio/    # Portfolio pages
│   │   ├── blog/         # Blog pages
│   │   ├── about/        # About page
│   │   └── contact/      # Contact page
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── portfolio/    # Portfolio components
│   │   ├── blog/         # Blog components
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── public/
│   └── images/           # Static images
└── package.json
```

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (ready)

## 📝 Current Status

### ✅ Completed
- [x] Next.js project initialized
- [x] Basic page structure (Home, Portfolio, Blog, About, Contact)
- [x] Layout components (Header, Footer, Navigation)
- [x] Tailwind CSS configured
- [x] TypeScript types defined
- [x] Sample content added

### ⏳ Next Steps
1. Add Outstatic CMS for content management
2. Import real content from WordPress
3. Add project detail pages
4. Add blog post detail pages
5. Optimize images
6. Deploy to Vercel

## 🚀 Deployment to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit: Next.js site"
git branch -M main
git remote add origin https://github.com/your-username/theft-studio-next.git
git push -u origin main

# Then deploy via Vercel dashboard or CLI
vercel
```

## 📄 License

© 2026 THEFT Studio. All rights reserved.
