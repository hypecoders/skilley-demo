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
			<Box ml={{ base: 0, md: 60 }}>{children}</Box>
		</Box>
	);
};

export default AppContent;
