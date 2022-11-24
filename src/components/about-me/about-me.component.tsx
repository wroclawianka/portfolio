import { Grid, GridItem, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const AboutMeNew = () => {
  const { t } = useTranslation();
  const style = useMultiStyleConfig('aboutMe', {});

  return (
    <Grid sx={style.root}>
      <GridItem>
        <Text sx={style.title}>About me</Text>
        <Text fontSize="lg">{t('aboutMe')}</Text>
      </GridItem>
    </Grid>
  );
};
