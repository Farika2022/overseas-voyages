/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        "white": "#ffffffff",
        "red-accent": {
          50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',  // Strong red
        800: '#991b1b',  // Very strong
        900: '#7f1d1d',  // Dark red
        }
      
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
