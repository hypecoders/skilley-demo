import {
	Avatar,
	Box,
	Button,
	HStack,
	Text,
	useToast,
	VStack
} from '@chakra-ui/react';
import { useCallback } from 'react';
import {
	HiOutlineUser as IUser,
	HiOutlineLockClosed as ILock
} from 'react-icons/hi';

import { UserData } from '../common/db';
import { toastProps } from '../common/defaults';

import Card from './Card';

type Props = {
	user: UserData;
};

// TODO: make global for user
const avatarColors = [
	'red',
	'orange',
	'yellow',
	'green',
	'teal',
	'blue',
	'cyan',
	'purple',
	'pink'
];

const PoolProfileCard = ({ user }: Props) => {
	const toast = useToast();
	const showSigninWarning = useCallback(
		() =>
			toast({
				title: 'Please sign in.',
				status: 'info',
				...toastProps
			}),
		[]
	);
	return (
		<Card>
			<VStack spacing={3}>
				<Avatar
					size="xl"
					color="white"
					bg={`${
						avatarColors[Math.floor(Math.random() * avatarColors.length)]
					}.500`}
					src={user.icon}
					icon={<IUser size={48} />}
				/>

				<Text fontSize="2xl" fontWeight="bold" align="center">
					{`${user.firstName} ${user.lastName}`}
					<Text fontSize="sm" color="gray.400">
						{user.position}
					</Text>
				</Text>

				<Box py={4} textAlign="center" px={-10}>
					{user.bio ? (
						<Text
							css={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								display: '-webkit-box',
								WebkitLineClamp: 4,
								lineClamp: 4,
								WebkitBoxOrient: 'vertical'
							}}
						>
							{user.bio}
						</Text>
					) : (
						<Text>No bio yet.</Text>
					)}
				</Box>

				<HStack spacing={6} pb={4}>
					<VStack spacing={0}>
						<Text fontWeight="bold">{user.skills.length}</Text>
						<Text color="gray.500">Skills</Text>
					</VStack>
					<VStack spacing={0}>
						<Text fontWeight="bold">{user.locations.length}</Text>
						<Text color="gray.500">Locations</Text>
					</VStack>
				</HStack>

				<Button
					onClick={showSigninWarning}
					variant="primary"
					width="full"
					leftIcon={<ILock size={20} />}
				>
					Profile
				</Button>
			</VStack>
		</Card>
	);
};

export default PoolProfileCard;
