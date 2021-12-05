import { Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import colors from '../utils/theme/colors';

const Dashboard = () => {
	const location = useLocation();
	return (
		<>
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
		</>
	);
};

export default Dashboard;
