import { Navigate, useLocation } from 'react-router-dom';

import SideMenu from '../components/dashboard/sidebar/SideMenu';
import useLoggedInUser from '../hooks/useLoggedInUser';

type Props = {
	child: JSX.Element | JSX.Element[];
};

const ProtectedApp = ({ child }: Props) => {
	const location = useLocation();
	const user = useLoggedInUser();

	if (user === undefined) {
		return <Navigate to="/" state={{ from: location }} />;
	}

	return <SideMenu>{child}</SideMenu>;
};

export default ProtectedApp;
