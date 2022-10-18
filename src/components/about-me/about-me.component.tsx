import { Grid, GridItem, useMultiStyleConfig } from '@chakra-ui/react';
import { Window } from '../window';
import json from './about-me.json';

export const AboutMe = () => {
  const style = useMultiStyleConfig('aboutMe', {});
  const sections = json.sections;

  return (
    <Grid sx={style.root}>
      <GridItem sx={style.first}>
        <Window title={sections.first.title} text={sections.first.content} />
      </GridItem>
      <GridItem sx={style.second}>
        <Window title={sections.second.title} text={sections.second.content} />
      </GridItem>
      <GridItem sx={style.third}>
        <Window title={sections.third.title} text={sections.third.content} />
      </GridItem>
    </Grid>
  );
};
