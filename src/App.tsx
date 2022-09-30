import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { theme } from './application.theme';
import { Intro, Layout, Projects, Stack } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Intro />
        <Projects />
        <Stack />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
