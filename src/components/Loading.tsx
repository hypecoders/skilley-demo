import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => (
	<Center minH="100vh">
		<Spinner size="xl" color="brand.500" overflowY="hidden" />
	</Center>
);

export default Loading;
