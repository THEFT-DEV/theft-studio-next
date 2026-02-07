import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        ring: 'oklch(var(--ring))',
      },
      fontFamily: {
        mono: ['TX-02', 'ui-monospace', 'SF Mono', 'Roboto Mono', 'Courier New', 'monospace'],
        sans: ['TX-02', 'ui-monospace', 'SF Mono', 'Roboto Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '48px', letterSpacing: 'normal' }],
        'display-md': ['32px', { lineHeight: '32px', letterSpacing: 'normal' }],
        'headline-lg': ['24px', { lineHeight: '32px', letterSpacing: 'normal' }],
        'body': ['13px', { lineHeight: '24px', letterSpacing: 'normal' }],
        'label': ['10px', { lineHeight: '16px', letterSpacing: '0.05em' }],
        'button': ['11px', { lineHeight: '16px', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        none: '0',
      },
      spacing: {
        'grid-1': 'var(--grid-1)',
        'grid-2': 'var(--grid-2)',
        'grid-3': 'var(--grid-3)',
        'grid-4': 'var(--grid-4)',
        'grid-6': 'var(--grid-6)',
        'grid-8': 'var(--grid-8)',
        'grid-12': 'var(--grid-12)',
        'grid-16': 'var(--grid-16)',
      },
      screens: {
        'xs': '480px',
        'sm': '768px',
        'md': '992px',
        'lg': '1440px',
        'xl': '1920px',
      },
      transitionDuration: {
        '75': '75ms',
        '150': '150ms',
        '300': '300ms',
      },
      maxWidth: {
        'container': '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
