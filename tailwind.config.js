module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		'greenish' : '#102E30',
    	},
      fontFamily: {
        'poppins' : ['Poppins', 'Arial', 'sans-serif'],
      }
    },
    variants: {
      extend: {
        scrollSnapType: ['responsive'],
        spacing: ['hover'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap')],
}
