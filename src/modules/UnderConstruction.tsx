import { Flex, Text, Icon } from '@chakra-ui/react';
import { HiOutlineCode as ICode } from 'react-icons/hi';

import useWindowDimensions from '../hooks/windowDimensions';

const UnderConstruction = () => {
	const { height } = useWindowDimensions();

	return (
		<Flex
			h={height - 80 - 48 - 48}
			bg="white"
			border="2px"
			borderColor="gray.100"
			boxShadow="sm"
			flexDirection="column"
			align="center"
			justifyContent="center"
		>
			<Text textAlign="center" fontWeight="bold" fontSize="2xl">
				Coming soon...
			</Text>
			<Icon as={ICode} boxSize={10} color="yellow.400" />
		</Flex>
	);
};

export default UnderConstruction;
