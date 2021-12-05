import {
	Box,
	chakra,
	Container,
	Flex,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

import colors from '../../utils/theme/colors';
import Logo from '../Logo';

const SocialButton = ({
	children,
	label,
	href
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => (
	<chakra.button
		bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
		rounded="full"
		w={8}
		h={8}
		cursor="pointer"
		as="a"
		href={href}
		display="inline-flex"
		alignItems="center"
		justifyContent="center"
		transition="background 0.3s ease"
		_hover={{
			bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
		}}
	>
		<VisuallyHidden>{label}</VisuallyHidden>
		{children}
	</chakra.button>
);

const Footer = () => (
	<Box bg={colors.brand[300]} color="white">
		<Container
			as={Flex}
			maxW="6xl"
			py={2}
			direction={{ base: 'column', md: 'row' }}
			justify={{ base: 'center', md: 'space-between' }}
			align="center"
			textAlign="center"
			flexDir="row"
		>
			<Stack display={{ base: 'none', md: 'flex' }}>
				<Logo />
			</Stack>
			<Text>© 2021 Skilley. All rights reserved</Text>
			<Stack display={{ base: 'none', md: 'flex' }} direction="row" spacing={6}>
				<SocialButton label="Twitter" href="#">
					<FaTwitter />
				</SocialButton>
				<SocialButton label="YouTube" href="#">
					<FaYoutube />
				</SocialButton>
				<SocialButton label="Instagram" href="#">
					<FaInstagram />
				</SocialButton>
			</Stack>
		</Container>
	</Box>
);

export default Footer;
