import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        meridian: {
          navy: '#0B1E3F',
          midnight: '#06122A',
          gold: '#B8924A',
          platinum: '#C8CED6',
          steel: '#6B7280',
          ivory: '#F7F8FA',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '16px',
        btn: '8px',
      },
      boxShadow: {
        elevated: '0 24px 60px -20px rgba(11, 30, 63, 0.18)',
        'elevated-lg': '0 32px 80px -24px rgba(11, 30, 63, 0.28)',
      },
      letterSpacing: {
        eyebrow: '0.16em',
        tightdisplay: '-0.02em',
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.16em' }],
        'display-xl': ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.02em' }],
        'display-lg': ['2.75rem', { lineHeight: '3.25rem', letterSpacing: '-0.01em' }],
        'display-md': ['1.75rem', { lineHeight: '2.25rem' }],
      },
      transitionTimingFunction: {
        meridian: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'bob': 'bob 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'accordion-up': 'accordion-up 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
