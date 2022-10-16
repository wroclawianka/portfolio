import { extendTheme } from '@chakra-ui/react';
import {
  aboutMeTheme,
  footerTheme,
  headerTheme,
  introTheme,
  projectsTheme,
  stackTheme,
  windowTheme,
  animatedPictureTheme
} from './components';
import { sideLinksTheme } from './components/side-links';

export const theme = extendTheme({
  components: {
    ...footerTheme,
    ...headerTheme,
    ...introTheme,
    ...aboutMeTheme,
    ...stackTheme,
    ...sideLinksTheme,
    ...windowTheme,
    ...projectsTheme,
    ...animatedPictureTheme
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
  }
});
