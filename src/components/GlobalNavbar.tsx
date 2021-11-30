import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const GlobalNavbar = () => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="h4">Skilley</Typography>
			<Button component={Link} to="/" color="inherit">
				Home
			</Button>
			<Button component={Link} to="/pricing" color="inherit">
				Pricing
			</Button>
			<Button component={Link} to="/invoices" color="inherit">
				Invoices
			</Button>
		</Toolbar>
	</AppBar>
);

export default GlobalNavbar;
