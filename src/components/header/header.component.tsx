import { Grid, Heading, useMultiStyleConfig } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const style = useMultiStyleConfig('header', {});
  const { t } = useTranslation();

  return (
    <Grid sx={style.root}>
      <Heading sx={style.heading}>{t('header.title')}</Heading>
    </Grid>
  );
};
