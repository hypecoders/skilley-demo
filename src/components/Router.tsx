import { Route, Routes } from 'react-router-dom';

import Dashboard from '../routes/Dashboard';
import Error404 from '../routes/Error404';
import Home from '../routes/Home';
import Invoice from '../routes/Invoice';
import Invoices from '../routes/Invoices';
import Pool from '../routes/Pool';
import Leaderboard from '../routes/Leaderboard';
import ProtectedRoute from '../routes/ProtectedRoute';

import AppBar from './landing-page/AppBar';
import Footer from './landing-page/Footer';

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
		<Route path="leaderboard" element={<Leaderboard />} />
		<Route path="invoices" element={<Invoices />}>
			<Route index element={<p>Select an invoice</p>} />
			<Route path=":invoiceId" element={<Invoice />} />
		</Route>
		<Route path="app">
			<Route
				path="dashboard"
				element={<ProtectedRoute child={<Dashboard />} />}
			/>
			<Route
				path="trending"
				element={<ProtectedRoute child={<Dashboard />} />}
			/>
			<Route
				path="explore"
				element={<ProtectedRoute child={<Dashboard />} />}
			/>
			<Route
				path="mytests"
				element={<ProtectedRoute child={<Dashboard />} />}
			/>
		</Route>
		<Route path="*" element={<Error404 />} />
	</Routes>
);

export default Router;
