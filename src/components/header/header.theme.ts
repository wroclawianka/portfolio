export const headerTheme = {
  header: {
    parts: ['root', 'heading', 'highlight'],
    baseStyle: {
      root: {
        background: 'white',
        width: '100%',
        position: 'fixed',
        top: 0,
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        zIndex: '1',
        height: '65px',
        p: {
          base: '0 6px',
          md: '0 45px'
        },
        display: {
          base: 'none',
          md: 'grid'
        }
      },
      heading: {
        margin: 'auto 0',
        fontFamily: '"JetBrains Mono", monospace',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: {
          base: '2xl',
          md: '3xl'
        }
      },
      animation: {
        display: {
          base: 'none',
          md: 'flex'
        }
      },
      switch: {
        margin: 'auto 0'
      }
    }
  }
};
