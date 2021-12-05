import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import useLoggedInUser from '../../hooks/useLoggedInUser';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import Logo from '../Logo';

const AppBar = () => {
	const user = useLoggedInUser();
	const navigate = useNavigate();

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
				{user ? (
					<Button
						ml={10}
						onClick={() => navigate('/app/dashboard')}
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize="sm"
						fontWeight={600}
						color="white"
						bg="brand.500"
						_hover={{
							bg: 'brand.300'
						}}
					>
						Go to app
					</Button>
				) : (
					<Box>
						<RegisterModal />
						<LoginModal />
					</Box>
				)}
			</Flex>
		</Box>
	);
};

export default AppBar;
