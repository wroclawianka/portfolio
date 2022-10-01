import { Grid, GridItem, useMultiStyleConfig } from '@chakra-ui/react';
import { Window } from '../window';

export const AboutMe = () => {
  const style = useMultiStyleConfig('aboutMe', {});

  return (
    <Grid sx={style.root}>
      <GridItem sx={style.first}>
        <Window />
      </GridItem>
      <GridItem sx={style.second}>
        <Window />
      </GridItem>
      <GridItem sx={style.third}>
        <Window />
      </GridItem>
    </Grid>
  );
};
