export const projectsTheme = {
  projects: {
    parts: ['root', 'project'],
    baseStyle: {
      root: {
        p: '50px 300px',
        minHeight: '100vh',
        // gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(60px, 100%/4)), 1fr))",
        // gap: '3',
        fontFamily: '"Nunito", sans-serif',
      },
      grid: {
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: '3',
      },
      flex: {
        justifyContent: "space-between",
        pb: 3,
      },
      buttons: {
        // p: 2,
        gap: 2,
        gridAutoFlow: 'column',
        justifyContent: 'end',
      },
      project: {
        p: 3,
        minHeight: '250px',
        // minWidth: '100px',
        h: '100%',
        background: 'teal.300'
      },
    }
  }
};
