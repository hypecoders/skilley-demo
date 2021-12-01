import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';
import AppBar from './components/global-navbar/AppBar';
import theme from './utils/theme';

import '@fontsource/assistant/700.css';
import '@fontsource/outfit/400.css';

const App = () => (
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<AppBar />
			<Router />
		</ChakraProvider>
	</BrowserRouter>
);

export default App;
