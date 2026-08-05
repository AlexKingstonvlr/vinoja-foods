import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/admin/config.yml'
  ],
  theme: {
    extend: {
      colors: {
        // Banana Leaf Kitchen — green paper, rosewood ink, brass & saffron
        paper: {
          DEFAULT: '#E8EDE6',
          soft: '#F1F4EF',
          deep: '#D5DED2'
        },
        ink: {
          DEFAULT: '#2A1F18',
          muted: '#5C4A3D',
          faint: '#8A7566'
        },
        leaf: {
          50: '#EAF3EE',
          100: '#D4E6DB',
          200: '#A8CDB7',
          300: '#7BB493',
          400: '#4E9A6F',
          500: '#2F7A52',
          600: '#1F5C45',
          700: '#184A38',
          800: '#12382A',
          900: '#0C261C'
        },
        brass: {
          50: '#FBF6E8',
          100: '#F5E9C4',
          200: '#EBD48A',
          300: '#E0BE55',
          400: '#D4A82E',
          500: '#C9A227',
          600: '#A6841F',
          700: '#7F6518',
          800: '#584610',
          900: '#32280A'
        },
        primary: {
          50: '#EAF3EE',
          100: '#D4E6DB',
          200: '#A8CDB7',
          300: '#7BB493',
          400: '#4E9A6F',
          500: '#2F7A52',
          600: '#1F5C45',
          700: '#184A38',
          800: '#12382A',
          900: '#0C261C',
          950: '#071610'
        },
        secondary: {
          50: '#FBF6E8',
          100: '#F5E9C4',
          200: '#EBD48A',
          300: '#E0BE55',
          400: '#D4A82E',
          500: '#C9A227',
          600: '#A6841F',
          700: '#7F6518',
          800: '#584610',
          900: '#32280A',
          950: '#1A1505'
        },
        accent: {
          50: '#FFF8EB',
          100: '#FFEEC7',
          200: '#FFD88A',
          300: '#FFC04D',
          400: '#F5A623',
          500: '#E8910F',
          600: '#C4740C',
          700: '#9A5A0E',
          800: '#704410',
          900: '#4A2E0C',
          950: '#2A1A06'
        },
        whatsapp: {
          DEFAULT: '#128C7E',
          dark: '#075E54',
          light: '#25D366'
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'Noto Sans Tamil', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Noto Serif Tamil', 'Georgia', 'serif'],
        tamil: ['Noto Sans Tamil', 'system-ui', 'sans-serif'],
        heading: ['Fraunces', 'Noto Serif Tamil', 'Georgia', 'serif']
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)',
        'fluid-5xl': 'clamp(2.75rem, 2rem + 3.5vw, 5rem)'
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 0.4rem + 0.5vw, 1rem)',
        'fluid-3': 'clamp(0.75rem, 0.6rem + 0.75vw, 1.5rem)',
        'fluid-4': 'clamp(1rem, 0.8rem + 1vw, 2rem)',
        'fluid-5': 'clamp(1.25rem, 1rem + 1.25vw, 2.5rem)',
        'fluid-6': 'clamp(1.5rem, 1.2rem + 1.5vw, 3rem)',
        'fluid-8': 'clamp(2rem, 1.6rem + 2vw, 4rem)',
        'fluid-10': 'clamp(2.5rem, 2rem + 2.5vw, 5rem)',
        'fluid-12': 'clamp(3rem, 2.4rem + 3vw, 6rem)',
        'fluid-16': 'clamp(4rem, 3.2rem + 4vw, 8rem)',
        'fluid-20': 'clamp(5rem, 4rem + 5vw, 10rem)'
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(42, 31, 24, 0.12)',
        warm: '0 8px 32px -12px rgba(31, 92, 69, 0.25)',
        lift: '0 12px 40px -16px rgba(42, 31, 24, 0.2)'
      },
      backgroundImage: {
        'leaf-veins':
          'radial-gradient(ellipse at 20% 0%, rgba(47, 122, 82, 0.08), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(201, 162, 39, 0.1), transparent 45%)',
        'spice-glow':
          'linear-gradient(135deg, rgba(31, 92, 69, 0.95) 0%, rgba(24, 74, 56, 0.88) 45%, rgba(42, 31, 24, 0.75) 100%)'
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'soft-pulse': 'softPulse 2.8s ease-in-out infinite',
        'steam': 'steam 4s ease-in-out infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        softPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 8px 28px rgba(18, 140, 126, 0.35)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 10px 36px rgba(18, 140, 126, 0.5)' }
        },
        steam: {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateY(-6px)' }
        }
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
