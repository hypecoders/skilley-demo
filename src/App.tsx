import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './utils/theme';
import Router from './components/Router';
import { UserProvider } from './hooks/useLoggedInUser';

import '@fontsource/assistant';
import '@fontsource/outfit';

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
