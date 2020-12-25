const colors = require('tailwindcss/colors')
module.exports = {

  purge: {
    options: {

    }
  },
  theme: {

    extend: {

      minHeight: {
        0: '0px',
        full: '100%',
        screen: '100vh',
        '64': '16rem',
      },
      spacing: {
        '1/2': '50%',
        '2/3': '66.666667%',
        '0.5': '0.125rem',
        '0': '0',
        '1': '0.25rem',
        '1.5': '0.35rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '144': '36rem',
        '216': '54rem'
      },
      colors: {

        womy: {
          darkBlue: '#0B2A4A',
          orange: '#FD8204'
        },

        vercel: {
          lightGray: '#fafafa',
          borderGray: '#eaeaea',
        },

        proposal: {
          green: '#097F7C'
        },

        surface: {
          dimmed: '#6e6d7a',
          base: '#0d0c22',
          lightGray: '#f3f3f3',
          DEFAULT: 'f0f0f0',

        },

        light: {
          onSurface: '#304a5f',
          surface: '#f8fafc',
          elevatedSurface: '#e1e7ef',
          dimmed: '#6e6d7a',
          semi: '#3d3e3e96'
        },
        gray: colors.blueGray,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        emerald: colors.emerald,
        amber: colors.amber,
        orange: colors.orange
      },
      borderRadius: {
        kush: '1.2rem',
        og: '8px'
      }
    },
  },
  variants: {
    ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'hover'],
    ringWidth: ['responsive', 'focus-within', 'focus', 'hover'],
    borderWidth: ['responsive', 'hover'],
    backgroundImage: ['responsive', 'hover'],

  },
  plugins: [],
}
