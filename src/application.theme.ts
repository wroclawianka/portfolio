import { extendTheme } from '@chakra-ui/react';
import {
  aboutMeTheme,
  footerTheme,
  headerTheme,
  introTheme,
  projectsTheme,
  stackTheme,
  windowTheme
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
    ...projectsTheme
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px'
  }
});
