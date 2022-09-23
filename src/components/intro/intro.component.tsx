import { Grid, useMultiStyleConfig } from '@chakra-ui/react';

export const Intro = () => {
  const style = useMultiStyleConfig('intro', {});

  return <Grid sx={style.root}>Intro</Grid>;
};
