import { Box, Grid, Image, Text, useMultiStyleConfig } from '@chakra-ui/react';
import avatar from './../../assets/avatar.jpeg';

export const Intro = () => {
  const style = useMultiStyleConfig('intro', {});

  // 1. animated Hi -> Hi, Hello, Ahoj, Salut, Cześć, Hola
  // 2. animated letters on hover
  // 3. style effect on hover of picture

  return (
    <Grid sx={style.root}>
      <Grid sx={style.content}>
        <Box>
          <Text fontSize="lg">Hello, my name is </Text>
          <Text fontSize="6xl">Dorota Zelga</Text>
          <Text fontSize="5xl">I build web applications</Text>
          <Text fontSize="lg" sx={style.description}>
            I am a front-end developer spcializing in web applications. My
            favourite stack is React, Typescript and GraphQL. I like working on
            business solutions which brings the value.
          </Text>
        </Box>
        <Box sx={style.picture}>
          <Image src={avatar} borderRadius="full" alt="Avatar" />
        </Box>
      </Grid>
    </Grid>
  );
};
