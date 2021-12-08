import { FC } from 'react';
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

import SideNav from './SideNav';
import MobileDashboard from './MobileDashboard';

const AppContent: FC = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh">
			{/* Side Navigation */}
			<SideNav
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
					<SideNav onClose={onClose} />
				</DrawerContent>
			</Drawer>
			<MobileDashboard onOpen={onOpen} />
			{/* App Content */}
			{/* Note: ml is 60 (width of sidenav + actual margin) */}
			{/* App Content */}
			<Box
				ml={{ md: 60 }}
				pl={{ base: 5, sm: 10 }}
				pr={{ base: 5, sm: 10, md: 12 }}
				py={12}
				bg="gray.50"
			>
				{children}
			</Box>
		</Box>
	);
};

export default AppContent;
