import { Route, Routes } from 'react-router-dom';

import Dashboard from '../routes/Dashboard';
import Error404 from '../routes/Error404';
import Pool from '../routes/Pool';
import Leaderboard from '../routes/Leaderboard';
import AppRoute from '../routes/app/AppRoute';
import Profile from '../routes/Profile';
import LandingPage from '../routes/LandingPage';
import MyTests from '../routes/app/tests/MyTests';
import NewTest from '../routes/app/tests/NewTest';

const Router = () => (
	<Routes>
		<Route path="/" element={<LandingPage />} />
		<Route path="pool" element={<Pool />} />
		<Route path="leaderboard" element={<Leaderboard />} />
		{/* <Route path="invoices" element={<Invoices />}>
			<Route index element={<p>Select an invoice</p>} />
			<Route path=":invoiceId" element={<Invoice />} />
		</Route> */}
		<Route path="app">
			<Route path="profile" element={<AppRoute child={<Profile />} />} />
			<Route path="dashboard" element={<AppRoute child={<Dashboard />} />} />
			<Route path="trending" element={<AppRoute child={<Dashboard />} />} />
			<Route path="explore" element={<AppRoute child={<Dashboard />} />} />
			<Route path="tests">
				<Route index element={<AppRoute child={<MyTests />} />} />
				<Route path="new" element={<AppRoute child={<NewTest />} />} />
			</Route>
		</Route>
		<Route path="*" element={<Error404 />} />
	</Routes>
);

export default Router;
