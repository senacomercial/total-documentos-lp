import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32',
        'primary-dark': '#1B5E20',
        'accent': '#FF7043',
        'gray-light': '#F5F5F5',
        'gray-border': '#E0E0E0',
      },
      fontFamily: {
        'geom': ['var(--font-geom-sans)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['24px', '32px'],
        '2xl': ['28px', '36px'],
        '3xl': ['32px', '40px'],
        '4xl': ['40px', '48px'],
        '5xl': ['48px', '56px'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '48': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      animation: {
        'accordion': 'accordion 300ms ease-in-out',
        'fade-in': 'fade-in 500ms ease-in-out',
      },
      keyframes: {
        'accordion': {
          'from': { 'height': '0px', 'opacity': '0' },
          'to': { 'height': 'var(--accordion-height)', 'opacity': '1' },
        },
        'fade-in': {
          'from': { 'opacity': '0' },
          'to': { 'opacity': '1' },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
