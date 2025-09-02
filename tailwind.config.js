// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // ...
      },
      colors: {
        // --- MODIFICATION: Change the primary color here ---
        primary: '#0ea5e9', // Was '#6F7DFF'

        // Dark theme colors (no changes needed)
        surface: '#111318',
        accent: '#6F7DFF', // This can be left or changed, but primary is what's used
        muted: '#A7AAB2',
        bgDark: '#0B0C10',
        textDark: '#EDEFF3',
        // Light theme colors (no changes needed)
        bgLight: '#FFFFFF',
        textLight: '#111318',
        mutedLight: '#6B7280',
        surfaceLight: '#F9FAFB'
      }
    }
  },
  plugins: []
}