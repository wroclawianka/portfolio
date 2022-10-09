export const projectsTheme = {
  projects: {
    parts: ['root', 'projectsGrid', 'projectBox', 'titleFlex', 'title', 'links', 'stackText', 'stackList'],
    baseStyle: {
      root: {
        p: '50px 300px',
        minHeight: '100vh',
        fontFamily: '"Nunito", sans-serif',
        background: 'teal.200'
      },
      projectsGrid: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 4
      },
      projectBox: {
        p: 5,
        h: '100%',
        minHeight: '250px',
        borderRadius: '10px',
        background: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      titleFlex: {
        justifyContent: 'space-between',
        pb: 3
      },
      title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 'lg'
      },
      links: {
        gap: 2,
        gridAutoFlow: 'column',
        justifyContent: 'end'
      },
      stackText: {
        pt: 4,
        fontSize: 'md'
      },
      stackList: {
        display: 'flex',
        gap: 3
      }
    }
  }
};
