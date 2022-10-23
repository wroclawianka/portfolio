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
        fontSize: 'md'
      },
      projectsGrid: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 6
      },
      projectHover: {
        marginTop: '0px',
        marginBottom: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;'
      },
      projectBox: {
        h: '100%',
        minHeight: '250px',
        borderRadius: '10px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '10px',
        transitionDuration: '0.5s',
        boxShadow: 'rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px'
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
