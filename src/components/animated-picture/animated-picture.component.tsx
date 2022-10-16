import { FunctionComponent } from 'react';
import { Box, ImageProps, useMultiStyleConfig } from '@chakra-ui/react';

type Props = Pick<ImageProps, 'src' | 'alt'>;

export const AnimatedPicture: FunctionComponent<Props> = ({ src, alt }) => {
  const style = useMultiStyleConfig('animatedPicture');

  return (
    <Box sx={style.imageBorder} _after={style.imageBorderAfter}>
      <Box sx={style.mainPicture} _hover={style.mainPictureHover}></Box>
    </Box>
  );
};
