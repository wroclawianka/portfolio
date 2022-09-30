import { Box, BoxProps, Grid, Icon, useMultiStyleConfig } from '@chakra-ui/react';
import { FunctionComponent } from 'react';


type Props = Pick<BoxProps, "sx">

export const Window: FunctionComponent<Props> = ({ sx }) => {
  const style = useMultiStyleConfig('window', {});

  console.log(sx)

  return <Grid sx={{ ...style.root, ...sx }}>
    <Box sx={style.topBar}>
      <Icon viewBox='0 0 200 200' color='black'>
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>
      <Icon viewBox='0 0 200 200' color='black'>
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>
      <Icon viewBox='0 0 200 200' color='black'>
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>

    </Box>
    <Box>
      
    </Box>
  </Grid>;
};
