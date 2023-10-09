import { Grid, GridItem, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const AboutMeNew = () => {
  const { t } = useTranslation();
  const { root, title, paragraph } = useMultiStyleConfig('aboutMe', {});

  return (
    <Grid sx={root}>
      <GridItem>
        <Text sx={title}>About me</Text>
        <Text fontSize="lg" sx={paragraph}>
          {t('aboutMe.p1')}
        </Text>
        <Text fontSize="lg" sx={paragraph}>
          {t('aboutMe.p2')}
        </Text>
      </GridItem>
    </Grid>
  );
};
