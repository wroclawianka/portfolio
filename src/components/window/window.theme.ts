export const windowTheme = {
  window: {
    parts: ['root', "topBar"],
    baseStyle: {
      root: {
        background: 'white',
        border: "2px solid black",
        borderRadius: '15px',
        height: '100%',
        gridTemplateRows: "30px auto"
      },
      topBar: {
        pl: '3',
        borderBottom: "2px solid black",
        display: 'grid',
        gridAutoFlow: 'column',
        gap: '2',
        justifyContent: 'start',
        alignItems: 'center',
      }
    }
  }
};
