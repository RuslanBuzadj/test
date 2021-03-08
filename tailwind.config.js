module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      
      'md': '768px',

      'lg': '992px',     

      'xl': '1140px',

      '2xl': '1280px',     
    }, 
    textColor: {
      'gray-light': '#A5A9C0',
      'gray-darken': '#7B7E92',
      'blue-dark': '#181F48',
      'blue-light': '#305DFB',
      'white': '#FFFFFF',            
    },
    fontSize: {      
      'xs': '10px',
      'sm': '.775rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',    
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'green-light': '#E2FAE6',
      'blue-crayola': '#305DFB',
      'blue-alice': '#EFF3FF',
      'green': '#1FCA3E',
      'grey-light': '#F8F8F8',
     }),
     flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '48': '0 0 48%',
      '40': '0 0 40%',
    },
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      fontFamily: {
        proxima: ["Proxima Nova"],
      },            
    },
  },
  variants: {},
  plugins: [],
};
