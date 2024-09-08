// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure to include all relevant paths
    "./public/index.html",        // This includes the public HTML file
  ],
  darkMode: false, // Or 'media' or 'class' for dark mode support
  theme: {
    extend: {}, // Add any custom theme extensions here
  },
  variants: {
    extend: {}, // Extend variants for different utilities
  },
  plugins: [], // Add any Tailwind plugins here
}

