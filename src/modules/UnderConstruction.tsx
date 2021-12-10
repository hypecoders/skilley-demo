import { Flex, Heading, Icon } from '@chakra-ui/react';
import { AiOutlineWarning } from 'react-icons/ai';

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
			<Heading>Under the construction</Heading>
			<Icon as={AiOutlineWarning} boxSize={10} color="orange.500" />
		</Flex>
	);
};

export default UnderConstruction;
