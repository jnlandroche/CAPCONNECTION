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
          950: '#0b1d2d',
          900: '#0f2233',
          800: '#162c42',
          700: '#1e3550',
          600: '#253d5c',
          500: '#2d4a6e',
        },
        slate: {
          750: '#1e2d3d',
        },
        blue: {
          600: '#1a3fd4',
          500: '#2d5bff',
          400: '#5279ff',
          100: '#dbe3ff',
        },
        gold: {
          400: '#d4af37',
          500: '#b8962e',
          300: '#e8c84a',
        }
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
