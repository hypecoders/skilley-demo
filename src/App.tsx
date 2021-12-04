import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';
import theme from './utils/theme';

import '@fontsource/assistant';
import '@fontsource/outfit';
import '@fontsource/overpass-mono';

const App = () => (
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<Router />
		</ChakraProvider>
	</BrowserRouter>
);

export default App;
