export const introTheme = {
  intro: {
    parts: ['root', 'content', 'subtitle', 'description', 'picture'],
    baseStyle: {
      root: {
        minHeight: '100vh',
        fontFamily: '"JetBrains Mono", monospace'
      },
      grid: {
        width: 'fit-content',
        minWidth: 'calc(55vw)',
        maxWidth: '800px',
        heigth: 'fit-content',
        margin: 'auto',
        gap: 2,
        gridAutoFlow: {
          base: 'column',
          md: 'row'
        },
        gridTemplateAreas: {
          base: '"content content" "picture picture"',
          md: '"content picture" "content picture"'
        },
        gridTemplateColumns: {
          md: '7fr 3fr'
        }
      },
      content: {
        gridArea: 'content',
        textAlign: {
          base: 'center',
          md: 'inherit'
        },
        maxWidth: {
          base: '450px',
          md: 'inherit'
        },
        p: {
          base: '0px 10px',
          md: 'inherit'
        }
      },
      name: {
        fontSize: {
          base: '5xl',
          md: '6xl'
        },
        fontWeight: 'bold'
      },
      subtitle: {
        fontSize: {
          base: '2xl',
          md: '3xl'
        },
        fontWeight: 'bold'
      },
      description: {
        mt: 4,
        maxWidth: {
          base: 'inherit',
          md: '90%'
        }
      },
      picture: {
        minWidth: '100px',
        margin: 'auto',
        gridArea: 'picture',
        maxWidth: {
          base: '150px',
          md: 'inherit'
        },
        marginTop: {
          base: 5,
          md: 'inherit'
        }
      }
    }
  }
};
