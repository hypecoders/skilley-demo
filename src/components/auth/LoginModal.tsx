import {
	Heading,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	VStack,
	ModalCloseButton,
	useToast,
	Button,
	useDisclosure
} from '@chakra-ui/react';

import { LoginController } from '../hoc/LoginController';

const LoginModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	return (
		<>
			<Button
				ml={10}
				onClick={onOpen}
				display={{ base: 'none', md: 'inline-flex' }}
				fontSize="sm"
				fontWeight={600}
				color="white"
				bg="brand.500"
				_hover={{
					bg: 'brand.300'
				}}
			>
				Login
			</Button>

			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInRight"
				size="xl"
				scrollBehavior="inside"
			>
				<ModalOverlay />
				<ModalContent mx={{ base: 5, md: 0 }}>
					<VStack spacing={8} py={{ base: 8, md: 10 }}>
						<VStack textAlign="center">
							<Heading fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>
								Log in
							</Heading>
						</VStack>
					</VStack>
					<ModalCloseButton display={{ base: 'block', md: 'none' }} />
					<ModalBody>
						<LoginController toast={toast} onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
