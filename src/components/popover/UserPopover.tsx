import {
	Button,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger
} from '@chakra-ui/react';
import { FiUserCheck } from 'react-icons/fi';

import { UserData } from '../../common/db';

type Props = {
	selectedUsers: UserData[];
	setSelectedUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
};

const UserPopover = ({ selectedUsers, setSelectedUsers }: Props) => (
	<Popover>
		<PopoverTrigger>
			<IconButton
				align="center"
				justifyContent="center"
				size="lg"
				position="fixed"
				bottom={5}
				right={5}
				bg="brand.500"
				color="white"
				borderRadius="20px"
				icon={<FiUserCheck />}
				display={{ base: 'flex', md: 'none' }}
				aria-label="+"
				_hover={{ backgroundColor: 'brand.500' }}
				_active={{
					backgroundColor: 'brand.500'
				}}
				_focus={{
					ring: 0
				}}
			>
				0
			</IconButton>
		</PopoverTrigger>
		<PopoverContent
			border="2px"
			borderRadius="xl"
			borderColor="brand.500"
			_focus={{ ring: 0 }}
		>
			<PopoverArrow />
			<PopoverCloseButton />
			<PopoverHeader>Selected users</PopoverHeader>
			<PopoverBody>
				{selectedUsers.map(user => (
					<Button
						key={user.uid}
						variant="skill"
						borderColor={
							selectedUsers.includes(user) ? 'brand.500' : 'gray.300'
						}
						onClick={() =>
							setSelectedUsers(
								selectedUsers.includes(user)
									? selectedUsers.filter(item => item !== user)
									: prevSelectedUsers => [...prevSelectedUsers, user]
							)
						}
					>
						{`${user.firstName} ${user.lastName}`}
					</Button>
				))}
			</PopoverBody>
		</PopoverContent>
	</Popover>
);

export default UserPopover;
