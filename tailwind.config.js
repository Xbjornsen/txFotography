/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.jsx'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#4A7A9D',    // Sky Blue
        secondary: '#1C2841',  // Deep Night Blue
        neutral: '#D2B48C',    // Warm Sand
        accent: '#E67E22',     // Sunset Orange
        forest: '#2E8B57',     // Forest Green
        background: '#F5F5F5', // Soft Cream
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}