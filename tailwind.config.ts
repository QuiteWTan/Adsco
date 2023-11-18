/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'cinzel': ['Cinzel Decorative', 'cursive'],
        'libre': ['Libre Baskerville', 'serif'],
        'linden': ['Linden Hill', 'serif'],
        'didot': ['GFS Didot', 'serif']
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/Furniture1.jpg')",
        'bg-img-2': "url('/Furniture2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern : "url('/pattern.png')",
        'pattern-1': "url('/FloatingCard1.png')",
        'pattern-2': "url('/FloatingCard2.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};