import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	useBreakpointValue
} from '@chakra-ui/react';

import MyTests from '../../../components/app/tests/MyTests';

const Tests = () => {
	const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
	return (
		<Box mx={{ md: 10 }}>
			<Flex justify="space-between">
				<Heading>My Tests</Heading>
				<Button variant="primary" size={buttonSize}>
					New test
				</Button>
			</Flex>
			{/* <Divider my={5} /> */}
			<MyTests />
		</Box>
	);
};

export default Tests;
