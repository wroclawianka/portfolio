import { Grid, useMultiStyleConfig } from '@chakra-ui/react';

export const Stack = () => {
  const style = useMultiStyleConfig('stack', {});

  return <Grid sx={style.root}></Grid>;
};
