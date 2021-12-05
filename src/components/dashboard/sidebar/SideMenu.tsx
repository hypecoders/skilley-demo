import React, { ReactNode } from 'react';
import {
	Box,
	CloseButton,
	Flex,
	useColorModeValue,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	BoxProps
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router';

import Logo from '../../Logo';

import NavItem from './NavItem';
import MobileNav from './MobileNav';

type LinkItemProps = {
	name: string;
	icon: IconType;
	path: string;
};
const LinkItems: Array<LinkItemProps> = [
	{ name: 'Dashboard', icon: FiHome, path: '/app/dashboard' },
	{ name: 'Trending', icon: FiTrendingUp, path: '/app/trending' },
	{ name: 'Explore', icon: FiCompass, path: '/app/explore' },
	{ name: 'My tests', icon: FiStar, path: '/app/mytests' }
];

const SideMenu = ({ children }: { children?: ReactNode }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box>
		</Box>
	);
};

type SidebarProps = {
	onClose: () => void;
} & BoxProps;

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	const location = useLocation();
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					<Logo />
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map(link => (
				<NavItem
					key={link.name}
					icon={link.icon}
					isActive={location.pathname === link.path}
					path={link.path}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

export default SideMenu;
