import { Center, Flex, Heading, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getUserData } from '../utils/firebase';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { UserData } from '../common/db';
import Loading from '../components/Loading';
import { ProfileController } from '../components/hoc/ProfileController';

const Profile = () => {
	const [userData, setUserData] = useState<UserData>();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const user = useLoggedInUser();
	const toast = useToast();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				try {
					const userData = await getUserData(user?.uid);
					setUserData(userData.data());
				} catch (err) {
					setIsError(true);
				}
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Center>Error while loading data</Center>;
	}

	return (
		<Flex minH="90vh" justifyContent="center" bg="white">
			<Flex align="center" flexDir="column" width="50%">
				<Heading my={10} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
					User Profile
				</Heading>
				<ProfileController userData={userData} user={user} toast={toast} />
			</Flex>
		</Flex>
	);
};

export default Profile;
