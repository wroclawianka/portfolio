import { Grid, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CommandAnimation } from './commandAnimation';

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
      <Text fontSize="3xl" sx={style.heading}>
        {t('header.title')}
        {'>'}
        <CommandAnimation isStarted={isAnimationStarted} />
      </Text>
      {/* <Switch sx={style.switch} size="lg" colorScheme="gray" /> */}
    </Grid>
  );
};
