import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { theme } from './application.theme';
import { Intro, Projects, Stack } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
        {/* <Header /> */}
        <Intro />
        <Projects />
        <Stack />
        {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
