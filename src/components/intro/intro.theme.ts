export const introTheme = {
  intro: {
    parts: ['root', 'content', 'subtitle', 'description', 'picture'],
    baseStyle: {
      root: {
        minHeight: '100vh',
        fontFamily: '"JetBrains Mono", monospace'
      },
      content: {
        width: 'fit-content',
        minWidth: 'calc(55vw)',
        maxWidth: '800px',
        heigth: 'fit-content',
        margin: 'auto',
        gridAutoFlow: 'row',
        gridTemplateColumns: '7fr 3fr',
        gap: 2
      },
      subtitle: {
        fontWeight: 'bold'
      },
      description: {
        mt: '4',
        maxWidth: '90%',
      },
      picture: {
        minWidth: '100px',
        margin: 'auto'
      },
    }
  }
};
