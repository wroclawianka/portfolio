import { FunctionComponent } from 'react';
import { Box, ImageProps, useMultiStyleConfig } from '@chakra-ui/react';

// inspired by https://codepen.io/iremlopsum/pen/gavjzv
export const AnimatedAvatar: FunctionComponent = () => {
  const style = useMultiStyleConfig('animatedAvatar');

  return (
    <Box sx={style.imageBorder} _after={style.imageBorderAfter}>
      <Box sx={style.mainPicture} _hover={style.mainPictureHover}></Box>
    </Box>
  );
};
