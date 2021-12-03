import {
	Heading,
	Text,
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	VStack,
	SimpleGrid,
	GridItem,
	ModalCloseButton,
	useBreakpointValue
} from '@chakra-ui/react';

import RegisterForm from './RegisterForm';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: Props) => {
	const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
	return (
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
					<RegisterForm />
				</ModalBody>
				<ModalFooter>
					<SimpleGrid columns={2} columnGap={3} rowGap={3} w="full" my={2}>
						{/* Sign Up Button */}
						<GridItem colSpan={2}>
							<Button variant="primary" size={buttonSize} w="full">
								Sign Up
							</Button>
						</GridItem>
						{/* Account created? Button */}
						<GridItem colSpan={2}>
							<Text align="center" fontSize={{ base: 'sm', md: 'md' }}>
								Already a user?{' '}
								<Button
									variant="link"
									color="brand.500"
									fontSize={{ base: 'sm', md: 'md' }}
								>
									Login
								</Button>
							</Text>
						</GridItem>
					</SimpleGrid>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default RegisterModal;
