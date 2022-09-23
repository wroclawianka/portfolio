import { Grid, useMultiStyleConfig } from '@chakra-ui/react';

export const Projects = () => {
  const style = useMultiStyleConfig('projects', {});

  return <Grid sx={style.root}>Projects</Grid>;
};
