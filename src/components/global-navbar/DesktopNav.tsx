import {
	Box,
	Stack,
	Link,
	Popover,
	PopoverTrigger,
	useColorModeValue
} from '@chakra-ui/react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import NAV_ITEMS from './navItems';

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const location = useLocation();

	return (
		<Stack direction="row" spacing={4}>
			{location.pathname}
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<Popover trigger="hover" placement="bottom-start">
						<PopoverTrigger>
							<Link
								as={RouterLink}
								p={2}
								to={navItem.href ?? '#'}
								fontSize="sm"
								fontWeight={500}
								color={linkColor}
								textDecoration={
									location.pathname === `/${navItem.label.toLowerCase()}` ||
									(location.pathname === '/' && navItem.label === 'Home')
										? 'underline'
										: 'none'
								}
								_hover={{
									textDecoration: 'underline',
									color: linkHoverColor
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

export default DesktopNav;
