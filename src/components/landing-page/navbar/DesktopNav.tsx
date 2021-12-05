import { Button, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { NAV_ITEMS } from '../AppBar';

const DesktopNav = () => {
	const navigate = useNavigate();
	return (
		<HStack spacing={4}>
			{NAV_ITEMS.map(navItem => (
				<Button
					key={navItem.label}
					onClick={() => navigate(navItem.href)}
					variant="link"
				>
					{navItem.label}
				</Button>
			))}
		</HStack>
	);
};

export default DesktopNav;
