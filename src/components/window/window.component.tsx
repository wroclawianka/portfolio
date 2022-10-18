import { Box, BoxProps, Grid, useMultiStyleConfig } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BlackDotIcon } from '../icons';

type Props = {
  text: string;
  title?: string;
} & Pick<BoxProps, 'sx'>;

export const Window: FunctionComponent<Props> = ({ text = '', title, sx }) => {
  const style = useMultiStyleConfig('window', {});

  return (
    <Grid sx={{ ...style.root, ...sx }}>
      <Box sx={style.topBar}>
        {[1, 2, 3].map((i) => (
          <BlackDotIcon key={i} />
        ))}
      </Box>
      <Box sx={style.content}>
        {title ? <Box sx={style.title}>{title}</Box> : null}
        <Box>{text}</Box>
      </Box>
    </Grid>
  );
};
