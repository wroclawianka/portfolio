export const aboutMeTheme = {
  aboutMe: {
    parts: ['root'],
    baseStyle: {
      root: {
        background: {
          base: 'none',
          md: 'teal.500',
          lg: 'teal.500',
          xl: 'teal.500',
          '2xl': 'teal.500'
        },
        color: {
          base: 'black',
          md: 'white',
          lg: 'white',
          xl: 'white',
          '2xl': 'white'
        },
        fontFamily: '"Nunito", sans-serif',
        p: {
          base: '10px 20px 10px',
          md: '10px 20px 10px 120px',
          lg: '50px 20px 50px 120px',
          xl: '50px 150px',
          '2xl': '50px 300px'
        }
      },
      title: {
        fontSize: {
          base: '4xl',
          md: '5xl'
        },
        fontWeight: 'bold',
        fontFamily: '"JetBrains Mono", monospace'
      },
      paragraph: {
        paddingBottom: '20px'
      }
    }
  }
};
