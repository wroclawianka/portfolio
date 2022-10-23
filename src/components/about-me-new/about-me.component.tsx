import { Grid, GridItem, Text, useMultiStyleConfig } from '@chakra-ui/react';


export const AboutMeNew = () => {
  const style = useMultiStyleConfig('aboutMeNew', {});

  return (
    <Grid sx={style.root}>
      <GridItem>
        <Text sx={style.title}>
          About me
        </Text>
        <Text fontSize="lg">
          I started my journey with IT as QA Engineer, by breaking things and finding inconsistencies.
          I liked this field, but I've decided to rather fix them as a Developer.
          Since 2018 I'm diving into front-end technologies.
          First, it was old-school AngularJS and JavaScript. Today I am spending my days accompanied by Typescript, React, Redux, and various technologies around.
          Front-end is my main specialization, but I am not afraid to make my hands dirty with some back-end code, AWS, GCP, or test automation.
        </Text>
      </GridItem>
    </Grid>
  );
};
