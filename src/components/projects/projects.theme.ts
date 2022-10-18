export const projectsTheme = {
  projects: {
    parts: [
      'root',
      'projectsGrid',
      'projectBox',
      'title',
      'links',
      'stackText',
      'stackList'
    ],
    baseStyle: {
      root: {
        p: {
          base: '10px 20px 10px 70px',
          md: '10px 20px 10px 120px',
          lg: '50px 20px 50px 120px',
          xl: '50px 150px',
          '2xl': '50px 300px'
        },
        minHeight: '100vh',
        fontFamily: '"Nunito", sans-serif',
        background: 'teal.200',
        fontSize: 'md'
      },
      projectsGrid: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 4
      },
      projectHover: {
        marginTop: '0px',
        marginBottom: '10px'
      },
      projectBox: {
        h: '100%',
        minHeight: '250px',
        borderRadius: '10px',
        background: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '10px',
        transitionDuration: '0.5s',
        border: '2px solid black'
      },
      title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 'lg',
        pb: 2
      },
      links: {
        gap: 2,
        gridAutoFlow: 'column',
        justifyContent: 'end'
      },
      content: {
        p: '15px'
      },
      stackText: {
        p: '15px',
        pt: 4,
        fontSize: 'sm',
        whiteSpace: 'nowrap'
      },
      stackList: {
        display: 'flex',
        gap: 3,
        color: 'grey'
      }
    }
  }
};
