import { Box, Grid, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedCommand } from '../animated-command';

const titles = [
  'software developer',
  'npm i typescript',
  'rm -rf',
  'git push --force'
];

export const Header = () => {
  const style = useMultiStyleConfig('header', {});
  const { t } = useTranslation();
  const [isAnimationStarted, setAnimation] = useState(false);

  return (
    <Grid
      sx={style.root}
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
    >
      <Text sx={style.heading}>
        {t('header.title')}
        <Box sx={style.animation}>
          {'>'}
          <AnimatedCommand isStarted={isAnimationStarted} titles={titles} />
        </Box>
      </Text>
      {/* <Switch sx={style.switch} size="lg" colorScheme="gray" /> */}
    </Grid>
  );
};
