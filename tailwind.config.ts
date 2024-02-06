module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'lg:w-1/4',
    'lg:w-2/4',
    'lg:w-3/4',
    'lg:w-4/4',
    'h-1/4',
    'h-2/4',
    'h-3/4',
    'h-4/4',
    'h-4/6'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height'
      },
      colors: {
        blue: {
          50: '#C8D6FD', // 10
          100: '#B7BFD6', // 20
          150: '#4591FF', // 40
          200: '#0054EA', // 60
          250: '#022A9B', // 80
          300: '#022A9A',
          350: '#002066' // 100
        },
        red: {
          250: '#FFEBEB'
        },
        gray: {
          80: '#5A5A5A',
          150: '#757575',
          250: '#3A3A3A',
          300: '#606882'
        }
      },
      boxShadow: {
        blue: '0px 5px 24px 6px rgba(62, 107, 253, 0.2)',
        lightblue: '0px 5px 24px 6px rgba(62, 107, 253, 0.1)',
        gray: '0px 5px 24px rgba(0, 50, 115, 0.2)'
      },
      fontFamily: {
        sans: ['Public Sans', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        35: '2.1875rem',
        28: '1.75rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
