export const aboutMeTheme = {
  aboutMe: {
    parts: ['root', 'first', 'second', 'third'],
    baseStyle: {
      root: {
        background: 'teal.200',
        minHeight: '100vh',
        padding: {
          base: '30px 20px 30px 70px',
          md: '30px 20px 30px 120px',
          xl: '80px 280px'
        },
        gap: '20px',
        gridTemplateAreas: {
          base: `
          "first"
          "second"
          "third"
          `,
          lg: `
          " . . . first first first ."
          "second second second first first first ."
          "second second second . third third third"
          " . . . . third third third"
          `,
        },
        fontFamily: '"Nunito", sans-serif'
      },
      first: {
        gridArea: 'first'
      },
      second: {
        gridArea: 'second'
      },
      third: {
        gridArea: 'third'
      }
    }
  }
};
