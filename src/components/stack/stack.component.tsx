import {
  Box,
  Grid,
  Image,
  Link,
  Tooltip,
  keyframes,
  useMultiStyleConfig,
  usePrefersReducedMotion
} from '@chakra-ui/react';
import reactIcon from './../../assets/stack/react.png';
import reduxIcon from './../../assets/stack/redux.png';
import apolloIcon from './../../assets/stack/apollo.png';
import tsIcon from './../../assets/stack/ts.png';
import jsIcon from './../../assets/stack/js.jpg';
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
import postmanIcon from './../../assets/stack/postman.png';
import { useState } from 'react';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const stack = [
  {
    alt: 'React',
    src: reactIcon,
    href: 'https://reactjs.org/'
  },
  {
    alt: 'Redux',
    src: reduxIcon,
    href: 'https://react-redux.js.org/'
  },
  {
    alt: 'Apollo GraphQL',
    src: apolloIcon,
    href: 'https://www.apollographql.com/'
  },
  { alt: 'EcmaScript 6', src: es6Icon, href: undefined },
  {
    alt: 'TypeScript',
    src: tsIcon,
    href: 'https://www.typescriptlang.org/'
  },
  { alt: 'JavaScript', src: jsIcon, href: undefined },
  {
    alt: 'Storybook',
    src: sbIcon,
    href: 'https://storybook.js.org/'
  },
  {
    alt: 'Chakra UI',
    src: chakraUIIcon,
    href: 'https://chakra-ui.com/'
  },
  {
    alt: 'Semantic UI',
    src: semanticIcon,
    href: 'https://semantic-ui.com/'
  },
  {
    alt: 'Material UI',
    src: muiIcon,
    href: 'https://mui.com/'
  },
  {
    alt: 'Bootstrap',
    src: bootstrapIcon,
    href: 'https://getbootstrap.com/'
  },
  {
    alt: 'Postman',
    src: postmanIcon,
    href: 'https://www.postman.com/'
  },
  { alt: 'Jest', src: jestIcon, href: 'https://jestjs.io/' },
  {
    alt: 'Playwright',
    src: playwrightIcon,
    href: 'https://playwright.dev/'
  },
  {
    alt: 'Cypress',
    src: cypressIcon,
    href: 'https://www.cypress.io/'
  },
  {
    alt: 'Selenium',
    src: seleniumIcon,
    href: 'https://www.selenium.dev/'
  },
  { alt: 'CSS', src: cssIcon, href: undefined },
  { alt: 'HTML', src: htmlIcon, href: undefined },
  {
    alt: 'Sass',
    src: sassIcon,
    href: 'https://sass-lang.com/'
  },
  {
    alt: 'jQuery',
    src: jQueryIcon,
    href: 'https://jquery.com/'
  }
];

export const Stack = () => {
  const style = useMultiStyleConfig('stack', {});
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hover, setHover] = useState<number | undefined>(undefined);

  const animation = prefersReducedMotion ? undefined : `${spin} 1 10s linear`;

  return (
    <Grid sx={style.root}>
      {stack.map(({ alt, src, href }, index) => (
        <Box sx={style.box} key={alt}>
          <Tooltip
            label={alt}
            openDelay={700}
            closeDelay={700}
            bg="grey.50"
            color="black"
          >
            <Link href={href} isExternal cursor={href ? 'pointer' : 'initial'}>
              <Image
                src={src}
                alt={alt}
                sx={style.icon}
                animation={hover === index ? animation : undefined}
                onMouseOver={() => setHover(index)}
                onMouseOut={() => setHover(undefined)}
              />
            </Link>
          </Tooltip>
        </Box>
      ))}
    </Grid>
  );
};
