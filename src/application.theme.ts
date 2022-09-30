import { extendTheme } from '@chakra-ui/react';
import {
  footerTheme,
  headerTheme,
  introTheme,
  layoutTheme,
  projectsTheme,
  stackTheme
} from './components';
import { sideLinksTheme } from './components/side-links';

export const theme = extendTheme({
  components: {
    ...footerTheme,
    ...headerTheme,
    ...introTheme,
    ...projectsTheme,
    ...stackTheme,
    ...layoutTheme,
    ...sideLinksTheme
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px'
  }
});
