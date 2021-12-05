import {
	Box,
	Button,
	Collapse,
	Flex,
	HStack,
	useBreakpointValue,
	useDisclosure
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import useLoggedInUser from '../../hooks/useLoggedInUser';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import Logo from '../Logo';

import DesktopNav from './navbar/DesktopNav';
import MenuToggle from './navbar/MenuToggle';
import MobileNav from './navbar/MobileNav';

type NavItem = {
	label: string;
	href: string;
};

export const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Pricing',
		href: '#'
	},
	{
		label: 'Leaderboard',
		href: '/leaderboard'
	},
	{
		label: 'Talent Pool',
		href: '/pool'
	}
];

const AppBar = () => {
	const user = useLoggedInUser();
	const navigate = useNavigate();
	const { isOpen, onToggle } = useDisclosure();
	const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

	return (
		<Box>
			<Flex
				bg="white"
				h="60px"
				py={2}
				px={{ base: 4, md: 10 }}
				borderBottom={1}
				borderStyle="solid"
				borderColor="gray.200"
				align="center"
				justify="space-between"
			>
				<MenuToggle isOpen={isOpen} onToggle={onToggle} />
				<Flex justify={{ base: 'center', md: 'left' }} align="center">
					<Logo />
				</Flex>
				<HStack spacing={{ md: 4 }}>
					<Box display={{ base: 'none', md: 'block' }} mr={6}>
						<DesktopNav />
					</Box>
					{user ? (
						<Button
							onClick={() => navigate('/app/dashboard')}
							variant="primary"
							size={buttonSize}
							ml={-10}
						>
							Dashboard
						</Button>
					) : (
						<HStack spacing={{ md: 4 }}>
							<LoginModal />
							<Box display={{ base: 'none', md: 'block' }}>
								<RegisterModal />
							</Box>
						</HStack>
					)}
				</HStack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};

export default AppBar;
