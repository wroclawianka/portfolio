export const projectsTheme = {
  projects: {
    parts: ['root', 'project'],
    baseStyle: {
      root: {
        p: '50px 150px',
        minHeight: '100vh',
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(100px, 100%/6)), 1fr))",
        gap: '3',
        fontFamily: '"Nunito", sans-serif',
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
        minHeight: '100px',
        minWidth: '100px',
        h: '100%',
        w: '100%',
        background: 'teal.300'
      },
    }
  }
};
