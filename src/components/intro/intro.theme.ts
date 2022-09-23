export const introTheme = {
  intro: {
    parts: ['root', 'content'],
    baseStyle: {
      root: {
        minHeight: '100vh'
      },
      content: {
        // border: '1px solid black',
        width: 'fit-content',
        minWidth: 'calc(55vw)',
        maxWidth: '800px',
        heigth: 'fit-content',
        // minHeight: 'calc(50vh)',
        margin: 'auto',
        gridAutoFlow: 'row',
        gridTemplateColumns: '7fr 3fr',
        gap: 2
      },
      description: {
        mt: '4',
        maxWidth: '90%'
      },
      picture: {
        minWidth: '100px',
        margin: 'auto'
      }
    }
  }
};
