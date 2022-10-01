import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { theme } from './application.theme';
import { AboutMe, Intro, Layout, Stack } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Intro />
        <AboutMe />
        <Stack />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
