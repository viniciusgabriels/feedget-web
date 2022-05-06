module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius: {
        md: '4px',
      },
      transitionTimingFunction: {
          'in-expo': 'cubic-bezier(.58,1.59,.44,.61)',
          'out-expo': 'cubic-bezier(.58,1.59,.44,.61)',
          inOut: 'cubic-bezier(.58,1.59,.44,.61)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
