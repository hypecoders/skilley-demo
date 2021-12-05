import {
	Heading,
	Text,
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
			<Button onClick={onOpen} variant="link" color="brand.500">
				Sign In
			</Button>

			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInRight"
				size="md"
				scrollBehavior="inside"
			>
				<ModalOverlay />
				<ModalContent mx={{ base: 5, md: 0 }}>
					<VStack spacing={8} py={10}>
						<VStack textAlign="center">
							<Heading fontSize={{ base: '2xl', md: '4xl' }}>
								Sign in to your account
							</Heading>
							<Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
								to enjoy all of our cool features ✌️
							</Text>
						</VStack>
					</VStack>
					<ModalCloseButton />
					<ModalBody>
						<LoginController toast={toast} onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
