import { Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import SideMenu from '../components/dashboard/sidebar/SideMenu';
import colors from '../utils/theme/colors';

const Dashboard = () => {
	const location = useLocation();
	return (
		<SideMenu>
			<Button
				colorScheme={colors.brand[300]}
				bg={colors.brand[300]}
				rounded="full"
				px={6}
				_hover={{
					bg: colors.brand[200]
				}}
			>
				Fuck me daddy
			</Button>
			{location.pathname}
		</SideMenu>
	);
};

export default Dashboard;
