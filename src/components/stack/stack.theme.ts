export const stackTheme = {
  stack: {
    parts: ['root'],
    baseStyle: {
      root: {
        p: {
          base: '0px',
          md: '10px 0 10px 120px',
          lg: '10px 20px 10px 120px',
          xl: '10px 20px 10px 80px',
          '2xl': '10px 300px 10px'
        },
        gridTemplateColumns: {
          base: 'repeat(4, 60px)',
          md: 'repeat(10, 60px)',
          lg: 'repeat(10, 60px)',
          xl: 'repeat(20, 60px)',
          '2xl': 'repeat(20, 60px)'
        },
        gridAutoFlow: 'dense',
        gap: 1,
        justifyContent: 'center'
      },
      box: {
        height: '60px',
        width: '60px'
      },
      icon: {
        height: '60px',
        width: '60px',
        filter: 'grayscale(0.6)',
        transition: '0.5s'
      },
      iconHover: {
        filter: 'grayscale(0)'
      }
    }
  }
};
