import { Navigate, useLocation } from 'react-router-dom';

import AppContent from '../../components/app/AppContent';
import useLoggedInUser from '../../hooks/useLoggedInUser';

type Props = {
	child: JSX.Element | JSX.Element[];
};

const AppRoute = ({ child }: Props) => {
	const location = useLocation();
	const user = useLoggedInUser();

	if (user === undefined) {
		return <Navigate to="/" state={{ from: location }} />;
	}

	return <AppContent>{child}</AppContent>;
};

export default AppRoute;
