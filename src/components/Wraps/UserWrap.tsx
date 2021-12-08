import { Button, Wrap } from '@chakra-ui/react';

import { UserData } from '../../common/db';

type Props = {
	selectedUsers: UserData[];
	setSelectedUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
};

const UserWrap = ({ selectedUsers, setSelectedUsers }: Props) => (
	<Wrap
		display={selectedUsers.length > 0 ? 'block' : 'none'}
		bg="white"
		borderColor={selectedUsers.length ? 'brand.500' : 'gray.300'}
		borderWidth={1}
		spacing="2px"
		borderRadius="25px"
		p={2}
		m={10}
	>
		{selectedUsers.map(user => (
			<Button
				p={4}
				m={10}
				key={user.uid}
				variant="skill"
				borderColor={selectedUsers.includes(user) ? 'brand.500' : 'gray.300'}
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
	</Wrap>
);

export default UserWrap;
