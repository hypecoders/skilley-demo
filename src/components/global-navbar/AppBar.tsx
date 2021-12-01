import {
	Box,
	Flex,
	IconButton,
	Button,
	Stack,
	Collapse,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const AppBar = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
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
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant="ghost"
						aria-label="Toggle Navigation"
					/>
				</Flex>

				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Logo />
					<Flex
						flex={{ base: 1 }}
						justify={{ md: 'center' }}
						display={{ base: 'none', md: 'flex' }}
						ml={10}
					>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify="flex-end"
					direction="row"
					spacing={6}
				>
					<Button as="a" fontSize="sm" fontWeight={400} variant="link" href="#">
						Sign In
					</Button>
					<Button
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize="sm"
						fontWeight={600}
						color="white"
						bg="pink.400"
						href="#"
						_hover={{
							bg: 'pink.300'
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};

export default AppBar;
