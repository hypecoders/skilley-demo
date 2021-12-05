import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

import useLoggedInUser from '../hooks/useLoggedInUser';
import useWindowDimensions from '../hooks/windowDimensions';
import HomeSubpage from '../modules/HomeSubpage';
import colors from '../utils/theme/colors';

const Home = () => {
	const { height } = useWindowDimensions();
	const user = useLoggedInUser();

	if (user) {
		return <Navigate to="/app/dashboard" state={{ from: location.pathname }} />;
	}

	return (
		<>
			<Container display="flex" height="100vh" maxW="3xl">
				<Stack
					as={Box}
					textAlign="center"
					spacing={{ base: 8, md: 14 }}
					justifyContent="center"
					// py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight="110%"
					>
						Get a
						<Text as="span" color={colors.brand[600]}>
							{' '}
							skilled{' '}
						</Text>
						developer for your company
					</Heading>
					<Text color="gray.500">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.
					</Text>
					<Stack
						direction="column"
						spacing={3}
						align="center"
						alignSelf="center"
						position="relative"
					>
						<Button
							colorScheme={colors.brand[300]}
							bg={colors.brand[300]}
							rounded="full"
							px={6}
							_hover={{
								bg: colors.brand[200]
							}}
						>
							Get Started
						</Button>
						<Button
							onClick={() =>
								window.scrollTo({ top: height + 48, behavior: 'smooth' })
							}
							variant="link"
							size="sm"
						>
							Look at benefits
						</Button>
					</Stack>
				</Stack>
			</Container>
			<HomeSubpage />
		</>
	);
};

export default Home;
