/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'white-shadow': '0px 3px 0px 0px #F3F3F3',
        'dark-shadow':
          'inset #454d44 0px -1.4px 0px, inset #454d44 0px 2px 0px',
        'green-shadow': 'inset #464A46 0px -3px 0px',
      },
    },
  },
  plugins: [],
};
