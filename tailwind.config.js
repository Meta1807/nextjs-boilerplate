const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.masonry': {
          'column-count': '3',
          'column-gap:': '2.5em',
        },
        'break-inside': {
          'break-inside': 'avoid',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
