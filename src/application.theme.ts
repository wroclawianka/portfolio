import { extendTheme } from '@chakra-ui/react';
import {
  aboutMeTheme,
  footerTheme,
  headerTheme,
  introTheme,
  layoutTheme,
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
    ...layoutTheme,
    ...sideLinksTheme,
    ...windowTheme
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px'
  }
});
