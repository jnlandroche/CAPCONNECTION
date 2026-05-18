/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#0a1628',
          800: '#0f2040',
          700: '#152a52',
          600: '#1e3a6e',
          500: '#254d94',
        },
        slate: {
          750: '#2a3444',
        },
        gold: {
          400: '#c9a84c',
          500: '#b8962e',
          300: '#e0c97a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
