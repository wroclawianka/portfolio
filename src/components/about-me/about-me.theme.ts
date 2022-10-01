export const aboutMeTheme = {
  aboutMe: {
    parts: ['root', 'first', 'second', 'third'],
    baseStyle: {
      root: {
        background: 'teal.200',
        minHeight: '100vh',
        padding: '80px 280px',
        gap: '20px',
        gridTemplateAreas: `
        " . . . first first first ."
        "second second second first first first ."
        "second second second . third third third"
        " . . . . third third third"
        `
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
