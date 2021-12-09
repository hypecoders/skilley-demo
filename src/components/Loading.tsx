import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => (
	<Center minH="90vh">
		<Spinner size="xl" color="brand.500" />
	</Center>
);

export default Loading;
