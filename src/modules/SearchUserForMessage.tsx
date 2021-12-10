import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { getDocs } from 'firebase/firestore';
import { useState, useEffect, useMemo, ChangeEvent } from 'react';

import { UserData } from '../common/db';
import Loading from '../components/Loading';
import SmallProfile from '../components/SmallProfile';
import useLoggedInUser from '../hooks/useLoggedInUser';
import useWindowDimensions from '../hooks/windowDimensions';
import { usersDataCollection } from '../utils/firebase';

type Props = {
	setRecipient: React.Dispatch<React.SetStateAction<UserData | undefined>>;
	setIsActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchUserForMessage = ({ setIsActiveSearch, setRecipient }: Props) => {
	const [users, setUsers] = useState<UserData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState<string>('');
	const { height } = useWindowDimensions();
	const user = useLoggedInUser();

	const filtredUsers = useMemo(
		() =>
			users.filter(user =>
				`${user.firstName} ${user.lastName}`.includes(search)
			),
		[users, search, setSearch]
	);

	const searchTrigger = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const querySnapshot = await getDocs(usersDataCollection);
			querySnapshot.forEach(doc => {
				setUsers(prevUsers => [...prevUsers, doc.data()]);
			});
			setIsLoading(false);
		};

		fetchData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Box h={height - 80 - 48 - 48}>
			<Flex>
				<Button variant="primary" onClick={() => setIsActiveSearch(false)}>
					Back
				</Button>
				<Input
					placeholder="Find people"
					value={search}
					onChange={e => searchTrigger(e)}
				/>
			</Flex>

			<Box h={height - 80 - 48 - 48} overflowY="scroll" overflowX="hidden">
				{filtredUsers.map(
					filtredUser =>
						filtredUser.uid !== user?.uid && (
							<SmallProfile
								key={filtredUser.uid}
								user={filtredUser}
								setIsActiveSearch={setIsActiveSearch}
								setRecipient={setRecipient}
							/>
						)
				)}
			</Box>
		</Box>
	);
};

export default SearchUserForMessage;
