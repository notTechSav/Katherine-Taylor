/** @type {import('tailwindcss').Config} */
const customGray = {
  50: '#f6f6f4',
  100: '#eeeeeb',
  200: '#dcdcd7',
  300: '#cacac3',
  400: '#a6a69d',
  500: '#838379',
  600: '#6b6b63',
  700: '#52524d',
  800: '#393937',
  900: '#202020',
};

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neue Haas Grotesk', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '300',
        medium: '400',
        semibold: '500',
        bold: '600',
      },
      colors: {
        luxury: {
          black: '#1a1a1a',
          white: '#fafafa',
          gray: customGray,
        },
        gray: customGray,
        primary: '#1a1a1a',
        secondary: '#fafafa',
        accent: '#f1f1ef',
      },
      boxShadow: {
        'luxury-sm': 'var(--shadow-elevation-low)',
        'luxury-md': 'var(--shadow-elevation-medium)',
        'luxury-lg': 'var(--shadow-elevation-high)',
      },
      maxWidth: {
        luxury: '70rem',
      },
      transitionDuration: {
        'luxury-fast': '250ms',
        luxury: '400ms',
      },
      transitionTimingFunction: {
        'luxury-in': 'cubic-bezier(0, 0, 0.58, 1)',
        'luxury-out': 'cubic-bezier(0.42, 0, 1, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
