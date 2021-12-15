import { CloseButton } from '@chakra-ui/close-button';
import { Box, BoxProps, Flex } from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';
import {
	HiOutlineChartPie as IDashboard,
	HiOutlineLightBulb as IPool,
	HiOutlineClipboardCheck as ITests,
	HiOutlineChat as IChat
} from 'react-icons/hi';
import { IconType } from 'react-icons';

import Logo from '../Logo';

import SideNavItem from './SideNavItem';

type NavItemProps = {
	label: string;
	icon: IconType;
	href: string;
};

const NAV_ITEMS: Array<NavItemProps> = [
	{ label: 'Dashboard', icon: IDashboard, href: '/app/dashboard' },
	{ label: 'Recruit', icon: IPool, href: '/app/recruit' },
	{ label: 'Messenger', icon: IChat, href: '/app/messenger' },
	{ label: 'My Tests', icon: ITests, href: '/app/tests' }
];

type SideNavProps = {
	onClose: () => void;
} & BoxProps;

const SideNav = ({ onClose, ...rest }: SideNavProps) => {
	const location = useLocation();
	return (
		<Box
			borderRight="1px"
			borderRightColor="gray.200"
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Logo />
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{NAV_ITEMS.map(navItem => (
				<SideNavItem
					key={navItem.label}
					icon={navItem.icon}
					href={navItem.href}
					isActive={location.pathname === navItem.href}
					onClick={onClose}
				>
					{navItem.label}
				</SideNavItem>
			))}
		</Box>
	);
};

export default SideNav;
