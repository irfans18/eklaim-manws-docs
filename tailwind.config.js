/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e8555',
          dark: '#29784c',
          darker: '#277148',
          darkest: '#205d3b',
          light: '#33925d',
          lighter: '#359962',
          lightest: '#3cad6e',
        }
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflict with Infima
  },
  blocklist: ['container'], // prevent tailwind from overriding docusaurus container class
};
