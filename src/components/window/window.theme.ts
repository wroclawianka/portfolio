export const windowTheme = {
  window: {
    parts: ['root', 'topBar', 'content'],
    baseStyle: {
      root: {
        height: '100%',
        background: 'white',
        border: '2px solid black',
        borderRadius: '15px',
        gridTemplateRows: '30px auto'
      },
      topBar: {
        pl: 3,
        display: 'grid',
        gap: 2,
        gridAutoFlow: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        borderBottom: '2px solid black'
      },
      content: {
        p: '5'
      },
      title: {
        fontWeight: 'bold',
        fontSize: '22px',
        pb: '5px'
      }
    }
  }
};
