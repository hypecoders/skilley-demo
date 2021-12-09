import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue
} from '@chakra-ui/react';
import { AiFillLock } from 'react-icons/ai';

import backgroundImg from '../assets/background.png';
import { UserData } from '../common/db';

type Props = {
	user: UserData;
};

const BigProfileCard = ({ user }: Props) => (
	<Center m={5}>
		<Box
			w={{ base: 250, md: 300 }}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow="md"
			rounded="md"
			overflow="hidden"
		>
			<Image
				h="120px"
				w="full"
				color="brand.500"
				name="skilley"
				src={user?.background ? user?.background : backgroundImg}
				objectFit="cover"
			/>

			<Flex justify="center" mt={-12}>
				<Avatar
					size="xl"
					color="white"
					bg="brand.300"
					name={user?.firstName}
					src={user?.icon}
					css={{
						border: '2px solid white'
					}}
				/>
			</Flex>

			<Box p={6}>
				<Stack spacing={0} align="center" mb={5}>
					<Heading fontSize="2xl" fontWeight={500} fontFamily="body">
						{`${user.firstName} ${user.lastName}`}
					</Heading>
					{/* <Text color="gray.500">Frontend Developer</Text> */}
				</Stack>

				<Stack direction="row" justify="center" spacing={6}>
					<Stack spacing={0} align="center">
						<Text fontWeight={600}>{user.skills?.length}</Text>
						<Text fontSize="sm" color="gray.500">
							Skills
						</Text>
					</Stack>
					<Stack spacing={0} align="center">
						<Text fontWeight={600}>{user.locations.length}</Text>
						<Text fontSize="sm" color="gray.500">
							Locations
						</Text>
					</Stack>
				</Stack>

				<Button
					_hover={{
						backgroundColor: 'brand.500'
					}}
					disabled
					variant="primary"
					width="full"
					mt={5}
				>
					Profile
					<AiFillLock />
				</Button>
			</Box>
		</Box>
	</Center>
);

export default BigProfileCard;
