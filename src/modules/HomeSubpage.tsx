import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
	Button
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';

import colors from '../utils/theme/colors';

type FeatureProps = {
	text: string;
	iconBg: string;
	icon?: ReactElement;
};

const Feature = ({ text, icon, iconBg }: FeatureProps) => (
	<Stack direction="row" align="center">
		<Flex
			w={8}
			h={8}
			align="center"
			justify="center"
			rounded="full"
			bg={iconBg}
		>
			{icon}
		</Flex>
		<Text fontWeight={600}>{text}</Text>
	</Stack>
);

const HomeSubpage = () => (
	<Container
		textAlign="center"
		spacing={{ base: 8, md: 14 }}
		py={{ base: 20, md: 36 }}
		height="100vh"
		maxW="5xl"
	>
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
			<Stack spacing={4}>
				<Text
					textTransform="uppercase"
					color="blue.400"
					fontWeight={600}
					fontSize="sm"
					bg={useColorModeValue('blue.50', 'blue.900')}
					p={2}
					alignSelf="flex-start"
					rounded="md"
				>
					Our benefits
				</Text>
				<Heading>A digital platform for better hiring</Heading>
				<Text color="gray.500" fontSize="lg">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore
				</Text>
				<Stack
					spacing={4}
					divider={
						<StackDivider
							borderColor={useColorModeValue('gray.100', 'gray.700')}
						/>
					}
				>
					<Feature
						icon={<Icon as={CheckIcon} color="yellow.500" w={5} h={5} />}
						iconBg={useColorModeValue('yellow.100', 'yellow.900')}
						text="Hire without predjudeces"
					/>
					<Feature
						icon={<Icon as={CheckIcon} color="green.500" w={5} h={5} />}
						iconBg={useColorModeValue('green.100', 'green.900')}
						text="Create tests for aplicants"
					/>
					<Feature
						icon={<Icon as={CheckIcon} color="purple.500" w={5} h={5} />}
						iconBg={useColorModeValue('purple.100', 'purple.900')}
						text="Find most suitable developer for you or your company"
					/>
				</Stack>
			</Stack>
			<Flex display={{ base: 'none', md: 'flex' }}>
				<Image
					rounded="md"
					alt="feature image"
					src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					objectFit="cover"
				/>
			</Flex>
		</SimpleGrid>
		<Button
			my={20}
			fontSize="sm"
			fontWeight={600}
			color="white"
			bg={colors.brand[300]}
			_hover={{
				bg: colors.brand[200]
			}}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			Back to top
		</Button>
	</Container>
);

export default HomeSubpage;
