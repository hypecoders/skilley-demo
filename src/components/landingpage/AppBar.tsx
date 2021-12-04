import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';

import RegisterModal from '../auth/RegisterModal';
import Logo from '../Logo';

const AppBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
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
				<Button onClick={onOpen} variant="link" color="brand.500">
					Create Account
				</Button>
				<RegisterModal isOpen={isOpen} onClose={onClose} />
			</Flex>
		</Box>
	);
};

export default AppBar;
