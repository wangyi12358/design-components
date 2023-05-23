/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/ui/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
