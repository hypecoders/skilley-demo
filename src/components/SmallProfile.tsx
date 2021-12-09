import {
	Heading,
	Avatar,
	Flex,
	Text,
	Button,
	useColorModeValue,
	Wrap
} from '@chakra-ui/react';

import { UserData, Locations } from '../common/db';

type Props = {
	user: UserData;
	selectedUsers?: UserData[];
	setSelectedUsers?: React.Dispatch<React.SetStateAction<UserData[]>>;
	setIsActiveSearch?: React.Dispatch<React.SetStateAction<boolean>>;
	setRecipient?: React.Dispatch<React.SetStateAction<UserData | undefined>>;
};

const SmallProfile = ({
	user,
	selectedUsers,
	setSelectedUsers,
	setIsActiveSearch,
	setRecipient
}: Props) => (
	<Wrap
		my={5}
		bg={useColorModeValue('white', 'gray.800')}
		boxShadow="md"
		rounded="md"
		border="2px"
		borderRadius="xl"
		borderColor="gray.100"
	>
		<Flex
			justifyContent="space-between"
			w="full"
			p={6}
			spacing={5}
			align="center"
		>
			<Flex flexDirection="row">
				<Avatar
					mr={5}
					size="md"
					color="white"
					bg="brand.300"
					name={user?.firstName}
					src={user?.icon}
					css={{
						border: '2px solid white'
					}}
				/>
				<Flex flex="start" flexDirection="column">
					<Heading fontSize="xl" fontWeight={500} fontFamily="body">
						{`${user.firstName} ${user.lastName}`}
					</Heading>
					<Text>
						{user.skills
							?.slice(0, 3)
							.map((skill, idx) =>
								(idx === 2 && user.skills.length === 3) ||
								(user.skills.slice(0, 3).length < 3 &&
									idx === user.skills.slice(0, 3).length - 1)
									? `${skill} `
									: `${skill}, `
							)}
						{user.skills.length > 3 && '...'}
					</Text>
					<Text>
						{' '}
						{user.locations.map((loc, idx) =>
							Locations.map(
								location =>
									location.value === loc &&
									(idx === 2 ||
									(user.locations.length < 3 &&
										idx === user.locations.length - 1)
										? `${location.label} `
										: `${location.label}, `)
							)
						)}
					</Text>
				</Flex>
			</Flex>
			<Flex flexDirection="column">
				{!setIsActiveSearch && (
					<Button variant="primary" borderRadius="25px" mt={1}>
						Profile
					</Button>
				)}

				{selectedUsers && setSelectedUsers && (
					<Button
						variant="skill"
						borderColor={
							selectedUsers.includes(user) ? 'brand.500' : 'gray.300'
						}
						mt={2}
						onClick={() =>
							setSelectedUsers(
								selectedUsers.includes(user)
									? selectedUsers.filter(item => item !== user)
									: prevSelectedUsers => [...prevSelectedUsers, user]
							)
						}
					>
						Select
					</Button>
				)}
				{setIsActiveSearch && setRecipient && (
					<Button
						variant="primary"
						// borderColor="brand.500"
						mt={2}
						onClick={() => {
							setIsActiveSearch(false);
							setRecipient(user);
						}}
					>
						Message
					</Button>
				)}
			</Flex>
		</Flex>
	</Wrap>
);

export default SmallProfile;
