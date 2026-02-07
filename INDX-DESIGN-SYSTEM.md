# INDX Design System Implementation

## Overview

The THEFT Studio Next.js site has been completely redesigned with the INDX design system, featuring a Swiss-Industrial terminal aesthetic with precise typography, OKLCH color system, and grid-locked spacing.

## What Was Implemented

### 1. Color System (OKLCH)

**Light Mode:**
- Background: `92% 0 0` (Warm paper #EBEBEB)
- Foreground: `18% 0 0` (Soft graphite #2E2E30)
- Card: `96% 0 0` (Light card #F5F5F5)
- Muted: `88% 0 0` (Subtle gray #E0E0E0)
- Border: `78% 0 0` (Subtle line #C5C5C5)

**Dark Mode:**
- Background: `10% 0 0` (Dark charcoal #191919)
- Foreground: `82% 0 0` (Soft chalk #D1D1D1)
- Card: `14% 0 0` (Charcoal card #242424)
- Muted: `16% 0 0` (Lighter charcoal #282828)
- Border: `25% 0 0` (Visible border #404040)

All colors use `oklch(var(--colorname))` format for modern color space support.

### 2. Typography System

**Font Family:**
- Primary: `TX-02` (monospace)
- Fallback: `ui-monospace`, `SF Mono`, `Roboto Mono`, `Courier New`, `monospace`

**Type Scale:**
- Display LG: 48px / 48px line height
- Display MD: 32px / 32px line height
- Headline LG: 24px / 32px line height
- Body: 13px / 24px line height (grid-locked)
- Label: 10px / 16px line height (UPPERCASE, 0.05em letter-spacing)
- Button: 11px / 16px line height (UPPERCASE, 0.05em letter-spacing)

### 3. Spacing System

**Grid Base:** 16px (1rem)

**Spacing Scale:**
- `--grid-1`: 4px
- `--grid-2`: 8px
- `--grid-3`: 12px
- `--grid-4`: 16px
- `--grid-6`: 24px
- `--grid-8`: 32px
- `--grid-12`: 48px
- `--grid-16`: 64px

All spacing uses grid-locked values for precise alignment.

### 4. Component System

**Buttons:**
- `.btn-primary`: Height 24px, transparent bg with border, fills on hover
- `.btn-ghost`: Height 24px, transparent, subtle hover
- Active state: `translate(1px, 1px)` for tactile feedback
- All text: UPPERCASE

**Inputs:**
- `.input-field`: Height 24px, 1px border, sharp corners
- Focus state: Border changes to foreground color
- Font: TX-02 monospace

**Cards:**
- `.card`: 16px padding, 1px border, no rounded corners
- Hover: Background changes to muted color

**Links:**
- `.link-arrow`: UPPERCASE, 11px font size, arrow shifts right on hover
- `.link-underline`: Border bottom transition on hover

### 5. Terminal Aesthetic

**Grain Texture Overlay:**
- Animated SVG grain pattern
- 0.04 opacity
- 8-step animation loop
- Fixed position overlay on body

**Sharp Design:**
- All border-radius values removed (0px everywhere)
- 1px solid borders throughout
- No rounded images or cards
- Precise, technical aesthetic

### 6. Updated Pages

**All pages now feature:**
- UPPERCASE headings and labels
- Grid-locked spacing with CSS variables
- Sharp-edged components (no rounded corners)
- Monospace TX-02 typography
- OKLCH color system
- Terminal-style aesthetics

**Specific Page Updates:**

1. **Homepage** (`/src/app/page.tsx`)
   - Large UPPERCASE hero headline
   - 2-column project grid with sharp borders
   - Terminal-style "READ MORE" / "VIEW PROJECT" links

2. **Portfolio** (`/src/app/portfolio/page.tsx`)
   - Sharp project cards with borders
   - UPPERCASE category tags
   - Grid-locked spacing

3. **Blog/Research** (`/src/app/blog/page.tsx`)
   - Terminal-style post cards
   - UPPERCASE headings
   - Date stamps in label typography

4. **About** (`/src/app/about/page.tsx`)
   - Structured data presentation
   - Border-left service cards
   - Swiss typography hierarchy

5. **Contact** (`/src/app/contact/page.tsx`)
   - 24px height input fields
   - Sharp borders on all form elements
   - UPPERCASE labels
   - Terminal-style success/error messages

### 7. Layout Components

**Header** (`/src/components/layout/Header.tsx`)
- Fixed header with 24px height
- UPPERCASE navigation items
- Dual timezone clocks (abbreviated to NY/BCN)
- Theme toggle button
- Border bottom separator

**Navigation** (`/src/components/layout/Navigation.tsx`)
- UPPERCASE menu items
- Border-bottom active state indicator
- Mobile menu with full-height overlay
- Sharp transitions (150ms)

**Footer** (`/src/components/layout/Footer.tsx`)
- Minimal design with border-top
- UPPERCASE navigation links
- Dual timezone clocks
- Grid-locked spacing

### 8. Tailwind Configuration

Updated `tailwind.config.ts` with:
- OKLCH color definitions
- TX-02 monospace font family
- Custom type scale sizes
- Grid spacing variables
- Border radius set to 0 (none)
- Dark mode support via class strategy

### 9. Special Features

**Theme Toggle:**
- Light/dark mode switcher in header
- Persists to localStorage
- Respects system preference on first load
- UPPERCASE button text

**Grain Texture:**
- Animated noise overlay
- Adds terminal/industrial feel
- Subtle 4% opacity
- Non-intrusive, performance-optimized

**Grid System:**
- All spacing uses 16px base grid
- Precise vertical rhythm
- 24px line height for body text
- Components snap to grid

## Design Principles Applied

1. **Swiss-Industrial Aesthetic**
   - Minimal ornamentation
   - Functional typography
   - Precise grid system
   - Technical precision

2. **Terminal-Style Interface**
   - Monospace typography throughout
   - UPPERCASE labels and headings
   - Sharp corners (no rounding)
   - Grain texture overlay
   - Technical feel

3. **OKLCH Color System**
   - Modern color space
   - Perceptually uniform
   - Better dark mode support
   - Precise color control

4. **Grid-Locked Design**
   - 16px base grid
   - 24px vertical rhythm
   - Consistent spacing
   - Mathematical precision

5. **Typography Hierarchy**
   - TX-02 monospace everywhere
   - Clear size scale
   - Grid-locked line heights
   - UPPERCASE for emphasis

## Files Modified

### Core Configuration:
- `/src/app/globals.css` - Complete design system CSS
- `/tailwind.config.ts` - INDX theme configuration

### Components:
- `/src/components/layout/Header.tsx` - Terminal-style header
- `/src/components/layout/Footer.tsx` - Minimal footer
- `/src/components/layout/Navigation.tsx` - Sharp navigation
- `/src/components/ThemeToggle.tsx` - Dark mode toggle (NEW)

### Pages:
- `/src/app/layout.tsx` - Updated spacing and font
- `/src/app/page.tsx` - Grid-locked homepage
- `/src/app/portfolio/page.tsx` - Sharp project grid
- `/src/app/blog/page.tsx` - Terminal-style blog
- `/src/app/about/page.tsx` - Structured about page
- `/src/app/contact/page.tsx` - Sharp form inputs

## Key Features

- ✅ Swiss-Industrial aesthetic
- ✅ TX-02 monospace typography
- ✅ OKLCH color system with light/dark modes
- ✅ 16px grid-locked spacing
- ✅ Sharp corners everywhere (0px border-radius)
- ✅ Terminal grain texture overlay
- ✅ Precise, minimal design
- ✅ Light/dark theme toggle
- ✅ 24px component heights
- ✅ UPPERCASE UI elements
- ✅ Animated grain texture
- ✅ Grid-based vertical rhythm

## Result

The THEFT Studio site now has a distinctive Swiss-Industrial terminal aesthetic that matches the INDX design system. The design is:

- **Precise**: Grid-locked spacing and typography
- **Minimal**: No unnecessary ornamentation
- **Technical**: Monospace fonts and sharp edges
- **Functional**: Clear hierarchy and user flows
- **Modern**: OKLCH colors and dark mode support
- **Accessible**: High contrast and clear typography

The site maintains THEFT Studio's content and structure while adopting the complete INDX visual language.
