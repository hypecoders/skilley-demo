import { CircularProgress, Flex } from '@chakra-ui/react';

const Loader = () => (
	<Flex align="center" justifyContent="center" bg="white" height="100vh">
		<CircularProgress isIndeterminate color="green.300" />
	</Flex>
);

export default Loader;
