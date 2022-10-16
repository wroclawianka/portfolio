import { Box, Grid, Image, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import avatar from './../../assets/avatar.jpeg';

export const Intro = () => {
  const style = useMultiStyleConfig('intro', {});
  const { t } = useTranslation();

  return (
    <Grid sx={style.root}>
      <Grid sx={style.grid}>
        <Box sx={style.content}>
          <Text fontSize="md">{t('intro.hi')} </Text>
          <Text sx={style.name}>
            {t('intro.dorota_zelga')}
          </Text>
          <Text fontSize="3xl" sx={style.subtitle}>
            {t('intro.front_end_developer')}
          </Text>
          <Text fontSize="md" sx={style.description}>
            {t('intro.description')}
          </Text>
        </Box>
        <Box sx={style.picture}>
          <Image src={avatar} borderRadius="full" alt="Avatar" />
        </Box>
      </Grid>
    </Grid>
  );
};
