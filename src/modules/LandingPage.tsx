import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';

import useWindowDimensions from '../hooks/windowDimensions';

import HomeSubpage from './HomeSubpage';

const LandingPage = () => {
	const { height } = useWindowDimensions();

	return (
		<>
			<Container display="flex" height="90vh" maxW="3xl">
				<Stack
					as={Box}
					textAlign="center"
					spacing={{ base: 8, md: 14 }}
					justifyContent="center"
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight="110%"
					>
						Get a
						<Text as="span" color="green.500" fontWeight="black">
							{' '}
							skilled{' '}
						</Text>
						developer for your company
					</Heading>
					<Text color="gray.500">
						Bring the end to the degree and CV based hiring. Pick your unique
						candidates from large talent pool, based on their actual skills and
						not their qualifications.
					</Text>
					<Stack
						direction="column"
						spacing={3}
						align="center"
						alignSelf="center"
						position="relative"
					>
						<Button variant="primary">Get Started</Button>
						<Button
							onClick={() =>
								window.scrollTo({ top: height, behavior: 'smooth' })
							}
							variant="link"
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

export default LandingPage;
