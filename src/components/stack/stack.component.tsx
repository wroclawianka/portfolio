import { Box, Grid, Image, useMultiStyleConfig } from '@chakra-ui/react';
import reactIcon from './../../assets/stack/react.png';
import reduxIcon from './../../assets/stack/redux.png';
import apolloIcon from './../../assets/stack/apollo.png';
import tsIcon from './../../assets/stack/ts.png';
import jsIcon from './../../assets/stack/js.png';
import es6Icon from './../../assets/stack/es6.png';
import sbIcon from './../../assets/stack/storybook.png';
import chakraUIIcon from './../../assets/stack/chakra_ui.jpg';
import muiIcon from './../../assets/stack/mui.png';
import semanticIcon from './../../assets/stack/semantic.png';
import bootstrapIcon from './../../assets/stack/bootstrap.png';
import jestIcon from './../../assets/stack/jest.png';
import playwrightIcon from './../../assets/stack/playwright.png';
import cypressIcon from './../../assets/stack/cypress.png';
import seleniumIcon from './../../assets/stack/selenium.jpg';
import sassIcon from './../../assets/stack/sass.png';
import cssIcon from './../../assets/stack/css.png';
import htmlIcon from './../../assets/stack/html.png';
import jQueryIcon from './../../assets/stack/jQuery.png';

export const Stack = () => {
  const style = useMultiStyleConfig('stack', {});



  const stack = [
    { alt: "React", src: reactIcon },
    // { alt: "React Native", src: reactIcon },
    { alt: "Redux", src: reduxIcon },
    { alt: "Apollo GraphQL", src: apolloIcon },
    { alt: "TypeScript", src: tsIcon },
    { alt: "JavaScript", src: jsIcon },
    { alt: "EcmaScript 6", src: es6Icon },
    { alt: "Storybook", src: sbIcon },
    { alt: "Chakra UI", src: chakraUIIcon },
    { alt: "Matrrial UI", src: muiIcon },
    { alt: "Semantic UI", src: semanticIcon },
    { alt: "Bootstrap", src: bootstrapIcon },
    { alt: "Jest", src: jestIcon },
    { alt: "Playwright", src: playwrightIcon },
    { alt: "Cypress", src: cypressIcon },
    { alt: "Selenium", src: seleniumIcon },
    { alt: "Sass", src: sassIcon },
    { alt: "CSS", src: cssIcon },
    { alt: "HTML", src: htmlIcon },
    { alt: "jQuery", src: jQueryIcon },
  ]

  return <Grid sx={style.root}>{
    stack.map(({ alt, src }) =>
      <Image
        src={src}
        alt={alt}
        maxH={"80px"}
        sx={style.icon}
        _hover={style.iconHover}
    />)
  }</Grid>;
};
