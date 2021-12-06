import { Flex, Heading, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getUserData } from '../utils/firebase';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { UserData } from '../common/db';
import Loader from '../components/Loader';
import { ProfileController } from '../components/hoc/ProfileController';

const Profile = () => {
	const [userData, setuserData] = useState<UserData>();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const user = useLoggedInUser();
	const toast = useToast();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				setIsLoading(true);
				const userData = await getUserData(user?.uid.toString());
				if (userData.exists()) {
					setuserData(userData.data());
				} else {
					setIsError(true);
				}
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return (
			<Flex align="center" justifyContent="center" bg="white" height="100vh">
				Error while loading data
			</Flex>
		);
	}

	return (
		<Flex justifyContent="center" bg="white">
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
