import {
  Box,
  BoxProps,
  Grid,
  Icon,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BlackDotIcon } from '../icons';

type Props = Pick<BoxProps, 'sx'>;

export const Window: FunctionComponent<Props> = ({ sx }) => {
  const style = useMultiStyleConfig('window', {});

  return (
    <Grid sx={{ ...style.root, ...sx }}>
      <Box sx={style.topBar}>
        {[1, 2, 3].map((i) => (
          <BlackDotIcon key={i} />
        ))}
      </Box>
      <Box></Box>
    </Grid>
  );
};
