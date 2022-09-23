import { extendTheme } from '@chakra-ui/react';
import {
  footerTheme,
  headerTheme,
  introTheme,
  projectsTheme,
  stackTheme
} from './components';

export const theme = extendTheme({
  components: {
    ...footerTheme,
    ...headerTheme,
    ...introTheme,
    ...projectsTheme,
    ...stackTheme
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px'
  }
});
