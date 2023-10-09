import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './application.theme';
import { AboutMeNew, Intro, Layout, Projects, Stack } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Intro />
        <AboutMeNew />
        <Projects />
        {/* <Stack /> */}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
