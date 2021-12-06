import {
	Heading,
	Avatar,
	Box,
	Center,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue
} from '@chakra-ui/react';

import { UserData } from '../common/db';

type Props = {
	user: UserData;
};

const SmallCard = ({ user }: Props) => (
	<Center m={5}>
		<Box
			w={{ base: 250, md: 300 }}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow="2xl"
			rounded="md"
			overflow="hidden"
		>
			<Box p={6}>
				<Flex spacing={5} align="center" mb={5}>
					<Avatar
						size="lg"
						color="white"
						bg="brand.300"
						name={user?.firstName}
						src={user?.icon}
						css={{
							border: '2px solid white'
						}}
					/>
					<Flex flex="start" flexDirection="column">
						<Heading fontSize="2xl" fontWeight={500} fontFamily="body">
							{`${user.firstName} ${user.lastName}`}
						</Heading>
						<Flex align="left">
							<Stack mx={5} align="center">
								<Text fontWeight={600}>{user.skills?.length}</Text>
								<Text fontSize="sm" color="gray.500">
									Skills
								</Text>
							</Stack>
							<Stack mx={5} align="center">
								<Text fontWeight={600}>{user.locations.length}</Text>
								<Text fontSize="sm" color="gray.500">
									Locations
								</Text>
							</Stack>
						</Flex>
					</Flex>
				</Flex>

				<Button variant="primary" width="full" mt={5}>
					Contact
				</Button>
			</Box>
		</Box>
	</Center>
);

export default SmallCard;
