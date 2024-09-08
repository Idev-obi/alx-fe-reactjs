// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure to include all relevant paths
    "./public/index.html",        // This includes the public HTML file
  ],
  darkMode: media, // Or 'media' or 'class' for dark mode support
  theme: {
    extend: {
      colors:{
        customBlue: '#1E40Af'
      },
    }, // Add any custom theme extensions here
  },
  variants: {
    extend: {}, // Extend variants for different utilities
  },
  plugins: [ 
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ], // Add any Tailwind plugins here
}

