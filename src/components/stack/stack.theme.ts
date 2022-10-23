export const stackTheme = {
  stack: {
    parts: ['root'],
    baseStyle: {
      root: {
        p: {
          base: '10px 20px 10px 70px',
          md: '10px 20px 10px 120px',
          lg: '50px 20px 50px 120px',
          xl: '10px 100px',
          '2xl': '10px 200px 30px 200px'
        },
        gridAutoFlow: 'column',
        gap: 1,
      },
      icon: {
        maxH: '60px',
        filter: 'grayscale(0.5)',
        transition: '0.5s'
      },
      iconHover: {
        filter: 'grayscale(0)',

      }
    }
  }
};
