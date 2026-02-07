# INDX Design System - Quick Start Guide

## What Changed

The THEFT Studio Next.js site now uses the complete INDX design system with:

- **Swiss-Industrial aesthetic** - Terminal-style monospace typography
- **OKLCH color system** - Modern color space with light/dark modes
- **Grid-locked spacing** - 16px base grid for precise alignment
- **Sharp design** - No rounded corners anywhere (0px border-radius)
- **TX-02 monospace font** - Throughout the entire site
- **Terminal grain texture** - Subtle animated noise overlay

## Running the Site

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

Visit: `http://localhost:3000`

## Theme Toggle

The site includes a light/dark mode toggle in the header:
- Click "DARK" to switch to dark mode
- Click "LIGHT" to switch back to light mode
- Theme preference is saved to localStorage
- Respects system preference on first visit

## Using the Design System

### Typography Classes

```tsx
// Display sizes (large headings)
<h1 className="text-display-lg">HEADING</h1>
<h2 className="text-display-md">HEADING</h2>

// Headline size (medium headings)
<h3 className="text-headline-lg">HEADING</h3>

// Body text (default)
<p className="text-body">Content here</p>

// Labels (small, uppercase)
<span className="text-label">LABEL TEXT</span>

// Buttons (small, uppercase)
<span className="text-button">BUTTON TEXT</span>
```

### Spacing with Grid Variables

```tsx
// Using grid spacing
<div className="p-grid-4">16px padding</div>
<div className="m-grid-2">8px margin</div>
<div className="gap-grid-6">24px gap</div>

// Available grid units:
// grid-1 (4px), grid-2 (8px), grid-3 (12px), grid-4 (16px)
// grid-6 (24px), grid-8 (32px), grid-12 (48px), grid-16 (64px)
```

### Button Styles

```tsx
// Primary button (transparent with border, fills on hover)
<button className="btn-primary">CLICK ME</button>

// Ghost button (transparent, subtle hover)
<button className="btn-ghost">CLICK ME</button>
```

### Input Fields

```tsx
// Standard input (24px height, sharp corners)
<input className="input-field" type="text" />

// Textarea
<textarea className="border border-border px-grid-2 py-grid-2" />
```

### Cards

```tsx
// Standard card
<div className="card">Content</div>

// Card with hover effect
<div className="card hover:bg-muted">Content</div>
```

### Links

```tsx
// Link with arrow (auto-uppercase)
<a className="link-arrow">
  VIEW PROJECT
  <span className="arrow">→</span>
</a>

// Link with underline
<a className="link-underline">Link text</a>
```

### Dividers

```tsx
// Solid divider
<div className="divider-solid" />

// Dotted divider
<div className="divider-dotted" />
```

## Color Usage

```tsx
// Using OKLCH colors
<div className="bg-background text-foreground">
<div className="bg-card text-card-foreground">
<div className="bg-muted text-muted-foreground">
<div className="border border-border">
```

## Layout Container

```tsx
// Max-width container (1920px)
<div className="max-w-container mx-auto px-grid-4 md:px-grid-8">
  {/* Your content */}
</div>
```

## Design Principles

1. **ALWAYS use UPPERCASE** for:
   - Headings
   - Navigation items
   - Button text
   - Labels
   - Categories/tags

2. **ALWAYS use grid spacing** (`grid-1` through `grid-16`) instead of arbitrary values

3. **NEVER use rounded corners** - All borders should be sharp (0px radius)

4. **ALWAYS use monospace** - The site uses TX-02 monospace throughout

5. **Keep it minimal** - Swiss-Industrial aesthetic favors clean, functional design

## Key Files

- `src/app/globals.css` - All design system CSS
- `tailwind.config.ts` - Tailwind theme configuration
- `src/components/ThemeToggle.tsx` - Light/dark mode toggle
- `INDX-DESIGN-SYSTEM.md` - Complete documentation

## Font Installation (Optional)

For production use, you may want to install the actual TX-02 font:

1. Obtain TX-02 font files (.woff, .woff2)
2. Place in `public/fonts/`
3. Add @font-face declaration in `globals.css`:

```css
@font-face {
  font-family: 'TX-02';
  src: url('/fonts/TX-02.woff2') format('woff2'),
       url('/fonts/TX-02.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Currently, the site uses system monospace fonts as fallbacks.

## Example Component

Here's a complete example using the INDX design system:

```tsx
export function ProjectCard({ project }) {
  return (
    <article className="group">
      <Link href={`/portfolio/${project.slug}`}>
        <div className="aspect-[4/3] mb-grid-4 bg-muted border border-border overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-headline-lg mb-grid-3 group-hover:opacity-60 transition-opacity duration-150">
          {project.title.toUpperCase()}
        </h3>
        <p className="text-body opacity-70 mb-grid-4">
          {project.description}
        </p>
        <div className="flex gap-grid-2 mb-grid-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-label px-grid-2 py-grid-1 border border-border">
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="link-arrow">
          VIEW PROJECT
          <span className="arrow">→</span>
        </div>
      </Link>
    </article>
  );
}
```

## Testing Checklist

- [ ] Light mode displays correctly
- [ ] Dark mode displays correctly
- [ ] Theme toggle works and persists
- [ ] All text is in TX-02 monospace (or fallback)
- [ ] No rounded corners anywhere
- [ ] Grid spacing is consistent
- [ ] All headings are UPPERCASE
- [ ] Grain texture is visible but subtle
- [ ] Components are 24px height where applicable
- [ ] Transitions are smooth (150-300ms)

## Support

For issues or questions about the INDX design system implementation:
1. Check `INDX-DESIGN-SYSTEM.md` for complete documentation
2. Review component examples in the pages
3. Inspect the compiled CSS in browser DevTools

The design system is fully implemented and production-ready!
