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
	useDisclosure,
	Button
} from '@chakra-ui/react';

import { RegisterController } from '../hoc/RegisterController';

const RegisterModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	return (
		<>
			<Button onClick={onOpen} variant="link" color="brand.500">
				Create Account
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
								Create your account
							</Heading>
							<Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
								to enjoy all of our cool features ✌️
							</Text>
						</VStack>
					</VStack>
					<ModalCloseButton display={{ base: 'block', md: 'none' }} />
					<ModalBody>
						<RegisterController toast={toast} onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default RegisterModal;
