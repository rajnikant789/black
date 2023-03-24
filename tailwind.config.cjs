/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'forest',
      'luxury',
      'dracula',
      'night',
    ],
  },
};