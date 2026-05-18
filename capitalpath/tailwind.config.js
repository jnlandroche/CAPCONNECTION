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
          950: '#060D18',
          900: '#0B1F33',
          800: '#102844',
          700: '#163258',
          600: '#1C3C6A',
          500: '#234A80',
        },
        silver: {
          400: '#D0D4DC',
          500: '#B7BDC7',
          600: '#8A9099',
          700: '#626A76',
        },
        gold: {
          400: '#D4B876',
          500: '#C8A45D',
          600: '#A8843D',
          700: '#886630',
        },
        blue: {
          600: '#1a3fd4',
          500: '#2d5bff',
          400: '#5279ff',
          100: '#dbe3ff',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
