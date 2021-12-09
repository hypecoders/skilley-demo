import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './utils/theme';
import Router from './components/Router';
import { UserProvider } from './hooks/useLoggedInUser';

import '@fontsource/source-sans-3/900.css';
import '@fontsource/source-sans-3/700.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/900.css';

const App = () => (
	<UserProvider>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<Router />
			</ChakraProvider>
		</BrowserRouter>
	</UserProvider>
);

export default App;
