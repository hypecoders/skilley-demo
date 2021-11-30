import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import GlobalNavbar from './components/GlobalNavbar';
import Router from './components/Router';

const App = () => (
	<BrowserRouter>
		<CssBaseline />
		<GlobalNavbar />
		<Container>
			<Router />
		</Container>
	</BrowserRouter>
);

export default App;
