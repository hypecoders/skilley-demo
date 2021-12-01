import { Box, Flex } from '@chakra-ui/react';

import Logo from './Logo';

const AppBar = () => (
	<Box>
		<Flex bg="white">
			<Logo />
		</Flex>
		{/* TODO: Routing */}
	</Box>
);

export default AppBar;
