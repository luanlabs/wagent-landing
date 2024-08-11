/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '1023px' },
        desktop: { min: '1024px' },
        bigScreen: { min: '1550px' },
        desktopMax: { max: '1536px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        xxl: { min: '1540px' },
        tall: { raw: '(min-height: 933px)' },
        short: { raw: '(max-height: 690px)' },
      },
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
