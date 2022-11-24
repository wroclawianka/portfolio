import { extendTheme } from '@chakra-ui/react';
import {
  aboutMeTheme,
  animatedAvatarTheme,
  headerTheme,
  introTheme,
  projectsTheme,
  stackTheme,
  windowTheme
} from './components';
import { sideLinksTheme } from './components/side-links';

export const theme = extendTheme({
  components: {
    ...headerTheme,
    ...introTheme,
    ...stackTheme,
    ...sideLinksTheme,
    ...windowTheme,
    ...projectsTheme,
    ...animatedAvatarTheme,
    ...aboutMeTheme
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
  }
});
