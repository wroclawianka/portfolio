export const headerTheme = {
  header: {
    parts: ['root', 'heading', 'highlight'],
    baseStyle: {
      root: {
        p: '0 45px',
        background: 'white',
        width: '100%',
        position: 'fixed',
        top: 0,
        height: '90px',
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        zIndex: '1'
      },
      heading: {
        margin: 'auto 0',
        fontFamily: '"JetBrains Mono", monospace',
        display: 'flex',
        fontWeight: 'bold'
      },
      switch: {
        margin: 'auto 0'
      }
    }
  }
};
