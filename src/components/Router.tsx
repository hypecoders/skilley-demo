import { Route, Routes } from 'react-router-dom';

import Dashboard from '../routes/Dashboard';
import Error404 from '../routes/Error404';
import Home from '../routes/Home';
import Invoice from '../routes/Invoice';
import Invoices from '../routes/Invoices';
import Pool from '../routes/Pool';
import Pricing from '../routes/Pricing';
import ProtectedApp from '../routes/ProtectedApp';

import AppBar from './landingpage/AppBar';
import Footer from './landingpage/Footer';

const Router = () => (
	<Routes>
		<Route
			path="/"
			element={
				<>
					<AppBar />
					<Home />
					<Footer />
				</>
			}
		/>
		<Route path="pool" element={<Pool />} />
		<Route path="pricing" element={<Pricing />} />
		<Route path="invoices" element={<Invoices />}>
			<Route index element={<p>Select an invoice</p>} />
			<Route path=":invoiceId" element={<Invoice />} />
		</Route>
		<Route path="app">
			<Route
				path="dashboard"
				element={<ProtectedApp child={<Dashboard />} />}
			/>
			<Route path="trending" element={<ProtectedApp child={<Dashboard />} />} />
			<Route path="explore" element={<ProtectedApp child={<Dashboard />} />} />
			<Route path="mytests" element={<ProtectedApp child={<Dashboard />} />} />
		</Route>
		<Route path="*" element={<Error404 />} />
	</Routes>
);

export default Router;
