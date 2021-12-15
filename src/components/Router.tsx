import { Route, Routes } from 'react-router-dom';

import Error404 from '../routes/Error404';
import AppRoute from '../routes/app/AppRoute';
import Profile from '../routes/app/Profile';
import IndexRoute from '../routes/IndexRoute';
import Tests from '../routes/app/tests/Tests';
import NewTest from '../routes/app/tests/NewTest';
import TalentPool from '../routes/TalentPool';
import Recruit from '../routes/app/Recruit';
import Messages from '../routes/app/Messages';
import Pricing from '../routes/Pricing';
import UnderConstruction from '../modules/UnderConstruction';

const Router = () => (
	<Routes>
		<Route path="/" element={<IndexRoute />} />
		<Route path="explore" element={<TalentPool />} />
		<Route path="pricing" element={<Pricing />} />
		<Route path="app">
			<Route path="profile" element={<AppRoute child={<Profile />} />} />
			<Route
				path="dashboard"
				element={<AppRoute child={<UnderConstruction />} />}
			/>
			<Route path="recruit" element={<AppRoute child={<Recruit />} />} />
			<Route path="messenger" element={<AppRoute child={<Messages />} />} />
			<Route path="tests">
				<Route index element={<AppRoute child={<Tests />} />} />
				<Route path="new" element={<AppRoute child={<NewTest />} />} />
			</Route>
		</Route>
		<Route path="*" element={<Error404 />} />
	</Routes>
);

export default Router;
