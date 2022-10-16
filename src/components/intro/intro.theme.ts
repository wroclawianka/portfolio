export const introTheme = {
  intro: {
    parts: ['root', 'content', 'subtitle', 'description', 'picture'],
    baseStyle: {
      root: {
        minHeight: '100vh',
        fontFamily: '"JetBrains Mono", monospace',
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
        // gridTemplateAreas:
          // '"content picture" "content picture"',
        gridTemplateColumns: {
          md: '7fr 3fr',
        },
        // gridTemplateRows: {
        //   base: '1fr 1fr 1fr'
        // }
      },
      content: {
        // gridArea: 'content',
        textAlign: {
          base: 'center',
          md: 'inherit',
        },
        maxWidth: {
          base: '450px',
          md: 'inherit',
        }
      },
      subtitle: {
        fontWeight: 'bold'
      },
      description: {
        mt: 4,
        maxWidth: '90%'
      },
      picture: {
        minWidth: '100px',
        margin: 'auto',
        // gridArea: 'picture',
        maxWidth: {
          base: '150px',
          md: 'inherit'
        },
        marginTop: {
          base: 5, 
          md: 'inherit',
        }
      }
    }
  }
};
