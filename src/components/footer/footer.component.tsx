import { Grid, useMultiStyleConfig } from '@chakra-ui/react';

export const Footer = () => {
  const style = useMultiStyleConfig('footer', {});

  return <Grid sx={style.root}>Footer</Grid>;
};
