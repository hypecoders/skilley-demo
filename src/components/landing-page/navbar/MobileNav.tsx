import { Box, Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { NAV_ITEMS } from '../AppBar';

const MobileNav = () => {
	const navigate = useNavigate();
	return (
		<Stack p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label} py={2} textAlign="center">
					<Button onClick={() => navigate(navItem.href)} variant="link">
						{navItem.label}
					</Button>
				</Box>
			))}
		</Stack>
	);
};

export default MobileNav;
