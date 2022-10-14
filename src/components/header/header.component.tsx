import { Grid, Heading, useMultiStyleConfig } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CommandAnimation } from './commandAnimation';

export const Header = () => {
  const style = useMultiStyleConfig('header', {});
  const { t } = useTranslation();

  return (
    <Grid sx={style.root}>
      <Heading sx={style.heading}>
        {t('header.title')}
        {'>'}
        <CommandAnimation />
      </Heading>
      {/* <Switch sx={style.switch} size="lg" colorScheme="gray" /> */}
    </Grid>
  );
};
