import { ReactNode } from 'react';
import {
	Box,
	Stack,
	HStack,
	Heading,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button
} from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import AppBar from '../components/landing-page/AppBar';
import Footer from '../components/landing-page/Footer';
import useWindowDimensions from '../hooks/windowDimensions';

const PriceWrapper = ({ children }: { children: ReactNode }) => (
	<Box
		mb={4}
		shadow="base"
		borderWidth="1px"
		alignSelf={{ base: 'center', lg: 'flex-start' }}
		borderColor={useColorModeValue('gray.200', 'gray.500')}
		borderRadius="xl"
	>
		{children}
	</Box>
);

const Pricing = () => {
	const { height, width } = useWindowDimensions();
	return (
		<>
			<AppBar />

			<Box py={12} height={width < 900 ? '100%' : height - 56.99 - 47.98}>
				<VStack spacing={2} textAlign="center">
					<Heading as="h1" fontSize="4xl">
						Plans that fit your need
					</Heading>
					<Text fontSize="lg" color="gray.500">
						With a Growth/Scale plan there is a 14-day free trial. No credit
						card needed. Cancel at anytime.
					</Text>
				</VStack>
				<Stack
					direction={width < 900 ? 'column' : 'row'}
					textAlign="center"
					justify="center"
					spacing={{ base: 4, lg: 10 }}
					py={10}
				>
					<PriceWrapper>
						<Box py={4} px={12}>
							<Text fontWeight="500" fontSize="2xl">
								Basic
							</Text>
							<HStack justifyContent="center">
								<Text fontSize="3xl" fontWeight="600">
									€
								</Text>
								<Text fontSize="5xl" fontWeight="900">
									0
								</Text>
								<Text fontSize="3xl" color="gray.500">
									/month
								</Text>
							</HStack>
						</Box>
						<VStack
							bg={useColorModeValue('gray.50', 'gray.700')}
							py={4}
							borderBottomRadius="xl"
						>
							<List spacing={3} textAlign="start" px={12}>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Create up to 5 tests
								</ListItem>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Up to 50 test solves
								</ListItem>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Up to 5 work positions
								</ListItem>
								<ListItem>
									<ListIcon as={FaTimesCircle} color="red.500" />
									Company profile
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Button
									w="full"
									border="2px"
									borderColor="brand.500"
									variant="outline"
								>
									Create account
								</Button>
							</Box>
						</VStack>
					</PriceWrapper>

					<PriceWrapper>
						<Box position="relative">
							<Box
								position="absolute"
								top="-16px"
								left="50%"
								style={{ transform: 'translate(-50%)' }}
							>
								<Text
									color="white"
									textTransform="uppercase"
									bg="brand.500"
									px={3}
									py={1}
									fontSize="sm"
									fontWeight="600"
									rounded="xl"
								>
									Most Popular
								</Text>
							</Box>
							<Box py={4} px={12}>
								<Text fontWeight="500" fontSize="2xl">
									Growth
								</Text>
								<HStack justifyContent="center">
									<Text fontSize="3xl" fontWeight="600">
										€
									</Text>
									<Text fontSize="5xl" fontWeight="900">
										25
									</Text>
									<Text fontSize="3xl" color="gray.500">
										/month
									</Text>
								</HStack>
							</Box>
							<VStack
								bg={useColorModeValue('gray.50', 'gray.700')}
								py={4}
								borderBottomRadius="xl"
							>
								<List spacing={3} textAlign="start" px={12}>
									<ListItem>
										<ListIcon as={FaCheckCircle} color="green.500" />
										Create up to 20 tests
									</ListItem>
									<ListItem>
										<ListIcon as={FaCheckCircle} color="green.500" />
										Up to 200 test solves.
									</ListItem>
									<ListItem>
										<ListIcon as={FaCheckCircle} color="green.500" />
										Up to 20 work positions
									</ListItem>
									<ListItem>
										<ListIcon as={FaCheckCircle} color="green.500" />
										Company profile
									</ListItem>
								</List>
								<Box w="80%" pt={7}>
									<Button w="full" variant="primary">
										Start trial
									</Button>
								</Box>
							</VStack>
						</Box>
					</PriceWrapper>
					<PriceWrapper>
						<Box py={4} px={12}>
							<Text fontWeight="500" fontSize="2xl">
								Scale
							</Text>
							<HStack justifyContent="center">
								<Text fontSize="3xl" fontWeight="600">
									€
								</Text>
								<Text fontSize="5xl" fontWeight="900">
									250
								</Text>
								<Text fontSize="3xl" color="gray.500">
									/month
								</Text>
							</HStack>
						</Box>
						<VStack
							bg={useColorModeValue('gray.50', 'gray.700')}
							py={4}
							borderBottomRadius="xl"
						>
							<List spacing={3} textAlign="start" px={12}>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Unlimited tests
								</ListItem>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Unlimited test solves.
								</ListItem>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Unlimited work positions
								</ListItem>
								<ListItem>
									<ListIcon as={FaCheckCircle} color="green.500" />
									Company profile
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Button
									w="full"
									border="2px"
									borderColor="brand.500"
									variant="outline"
								>
									Start trial
								</Button>
							</Box>
						</VStack>
					</PriceWrapper>
				</Stack>
			</Box>
			<Footer />
		</>
	);
};

export default Pricing;
