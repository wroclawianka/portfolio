import { Grid, Heading, Switch, useMultiStyleConfig } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const style = useMultiStyleConfig('header', {});
  const { t } = useTranslation();

  // 1. Add sections and scroll on click
  // 2. dark.light more
  // 2. Make if blink >_
  // 3. Add changing titles on scroll
  // Front-end developer
  // Team player
  // npm i typescript
  // Agile enthusiast
  // Amateur artist
  // rm -rf
  // coffee, coffee, coffee

  return (
    <Grid sx={style.root}>
      <Heading sx={style.heading}>{t('header.title')}</Heading>
      <Switch sx={style.switch} size="lg" colorScheme="gray" />
    </Grid>
  );
};
