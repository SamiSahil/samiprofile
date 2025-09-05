// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // --- MODIFICATION: Added new font families ---
        inter: ['Inter', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        lugrasimo: ['Lugrasimo', 'cursive'],
        federo: ['Federo', 'sans-serif'],
      },
      colors: {
        primary: '#0ea5e9', 

        // Dark theme colors
        surface: '#111318',
        accent: '#6F7DFF',
        muted: '#A7AAB2',
        bgDark: '#0B0C10',
        textDark: '#EDEFF3',
        // Light theme colors
        bgLight: '#FFFFFF',
        textLight: '#111318',
        mutedLight: '#6B7280',
        surfaceLight: '#F9FAFB'
      }
    }
  },
  plugins: []
}