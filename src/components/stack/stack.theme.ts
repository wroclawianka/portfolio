export const stackTheme = {
  stack: {
    parts: ['root'],
    baseStyle: {
      root: {
        p: {
          base: '20px 20px 20px 70px',
          md: '10px 20px 10px 120px',
          lg: '50px 20px 50px 120px',
          xl: '10px 100px',
          '2xl': '10px 200px 30px 200px'
        },
        gridTemplateColumns: {
          base: 'repeat(4, minmax(60px, 1fr))',
          md: 'repeat(8, minmax(60px, 1fr))',
          lg: 'repeat(12, minmax(60px, 1fr))',
          xl: 'repeat(19, minmax(60px, 1fr))',
          '2xl': 'repeat(19, minmax(60px, 1fr))',
        },
        gridAutoFlow: 'dense',
        gap: 1,
      },
      box: {
        height: '60px',
        width: '60px',
      },
      icon: {
        height: '60px',
        width: '60px',
        filter: 'grayscale(0.5)',
        transition: '0.5s'
      },
      iconHover: {
        filter: 'grayscale(0)',

      }
    }
  }
};
