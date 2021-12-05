import { Box, Flex } from '@chakra-ui/react';

import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import Logo from '../Logo';

const AppBar = () => (
	<Box zIndex={99} top={0} position="fixed" width="100%">
		<Flex
			bg="white"
			h="60px"
			py={2}
			px={{ base: 4, md: 16 }}
			borderBottom={1}
			borderStyle="solid"
			borderColor="gray.200"
			align="center"
			justify="space-between"
		>
			<Logo />

			<Box>
				<RegisterModal />
				<LoginModal />
			</Box>
		</Flex>
	</Box>
);

export default AppBar;
