import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './application.theme';
import { Intro, Layout, Projects } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Intro />
        {/* <AboutMe /> */}
        <Projects />
        {/* <Stack /> */}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
