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
          <Text fontSize="md">Hi, I am </Text>
          <Text fontSize="6xl" sx={style.subtitle}>
            Dorota Zelga
          </Text>
          <Text fontSize="3xl" sx={style.subtitle}>
            Front-end developer
          </Text>
          <Text fontSize="md" sx={style.description}>
            I am spcialized in web applications. Currently building 
            with React, Redux and TypeScript stack. 
          </Text>
        </Box>
        <Box sx={style.picture}>
          <Image src={avatar} borderRadius="full" alt="Avatar" />
        </Box>
      </Grid>
    </Grid>
  );
};
