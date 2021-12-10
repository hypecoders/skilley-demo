import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { UserData } from '../common/db';
import Loading from '../components/Loading';
import useLoggedInUser from '../hooks/useLoggedInUser';
import Messenger from '../modules/Messenger';
import SearchUserForMessage from '../modules/SearchUserForMessage';
import { getUserData } from '../utils/firebase';

const Messages = () => {
	const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);
	const [recipient, setRecipient] = useState<UserData | undefined>(undefined);
	const user = useLoggedInUser();

	const [userData, setuserData] = useState<UserData>();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				const userData = await getUserData(user?.uid.toString());
				if (userData.exists()) {
					setuserData(userData.data());
				}
			}
		};
		fetchData();
	}, []);

	if (!userData && !isActiveSearch) {
		return <Loading />;
	}

	if (userData && !isActiveSearch) {
		return (
			<Box>
				<Messenger
					recipient={recipient}
					setRecipient={setRecipient}
					userData={userData}
					setIsActiveSearch={setIsActiveSearch}
				/>
			</Box>
		);
	}

	return (
		<Box>
			<SearchUserForMessage
				setIsActiveSearch={setIsActiveSearch}
				setRecipient={setRecipient}
			/>
		</Box>
	);
};

export default Messages;
