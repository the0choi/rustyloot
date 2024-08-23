/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coins-text-yellow': 'linear-gradient(180deg, #FFD691 0%, #EEB351 54.17%)',
        'logo-background': 'linear-gradient(35deg, #322D31 -10.5%, #312C31 -10.49%, #21202E 15.8%, #1A1D2F 42.49%)',
        'logo-mobile-background': 'linear-gradient(90deg,#21202F 0%,#1B1D2F 48.4%,#1C1E30 100%)',
        'header-footer-background': 'linear-gradient(90deg,#1A1D2F 0%,#191A2C 100%)',
        'wallet-button': 'linear-gradient(83deg,#04803D 0%,#35B46A 40.1%,#089142 71.88%,#26AD5F 100%)',
        'wallet-button-hover': 'linear-gradient(83deg,#0BAC55 0%,#37BE6F 40.1%,#10B857 71.88%,#3CE081 100%)',
      },
      textShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.navbar-text-shadow': {
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      });
    },
  ],
}