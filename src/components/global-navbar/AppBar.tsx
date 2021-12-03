import {
	Box,
	Flex,
	Button,
	Stack,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';

import RegisterModal from '../auth/RegisterModal';

import Logo from './Logo';
const AppBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box zIndex={99} top={0} position="fixed" width="100%">
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH="60px"
				py={{ base: 2 }}
				px={{ base: 4, md: 20 }}
				borderBottom={1}
				borderStyle="solid"
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align="center"
			>
				<Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
					<Logo />
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify="flex-end"
					direction="row"
					spacing={6}
				>
					<Button onClick={onOpen} variant="link" color="brand.500">
						Create Account
					</Button>
					<RegisterModal isOpen={isOpen} onClose={onClose} />
				</Stack>
			</Flex>
		</Box>
	);
};
export default AppBar;
