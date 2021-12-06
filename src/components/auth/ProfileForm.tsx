import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Button, Flex } from '@chakra-ui/react';
import { Form } from 'formik';
import {
	CheckboxContainer,
	CheckboxControl,
	InputControl,
	SubmitButton
} from 'formik-chakra-ui';
import { useEffect, useState } from 'react';

import { UserData } from '../../common/db';
import { errorMessageProps } from '../../common/defaults';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import { getUserData } from '../../utils/firebase';
import FormLabel from '../FormLabel';
import Loader from '../Loader';
import Skills from '../Skills';

const ProfileForm = () => {
	const colSpan = useBreakpointValue({ base: 2, md: 1 });
	const [userData, setuserData] = useState<UserData>();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const user = useLoggedInUser();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				setIsLoading(true);
				const userData = await getUserData(user?.uid.toString());
				if (userData.exists()) {
					setuserData(userData.data());
					console.log(userData.data());
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
		<Form>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
				{/* First Name */}
				<GridItem colSpan={colSpan}>
					<FormLabel>First Name</FormLabel>
					<InputControl
						name="firstName"
						{...errorMessageProps}
						inputProps={{ placeholder: userData?.firstName }}
					/>
				</GridItem>

				{/* Last Name */}
				<GridItem colSpan={colSpan}>
					<FormLabel>Last Name</FormLabel>
					<InputControl
						name="lastName"
						{...errorMessageProps}
						inputProps={{ placeholder: userData?.lastName }}
					/>
				</GridItem>

				{/* Email */}
				<GridItem colSpan={2}>
					<FormLabel>Email address</FormLabel>
					<InputControl
						name="email"
						{...errorMessageProps}
						inputProps={{ placeholder: user?.email ? user.email : 'email' }}
					/>
				</GridItem>

				{/* Location */}
				<GridItem colSpan={2}>
					<FormLabel>Preferred location</FormLabel>
					<CheckboxContainer
						name="locations"
						stackProps={{ pl: 0, spacing: 4, direction: ['column', 'row'] }}
					>
						<CheckboxControl
							checked={userData?.locations.includes('slovakia')}
							name="locations"
							value="slovakia"
						>
							Slovakia
						</CheckboxControl>
						<CheckboxControl
							checked={userData?.locations.includes('czechia')}
							name="locations"
							value="czechia"
						>
							Czech Republic
						</CheckboxControl>
						<CheckboxControl
							name="locations"
							value="remote"
							checked={userData?.locations.includes('remote')}
						>
							Remote
						</CheckboxControl>
					</CheckboxContainer>

					<Skills />
				</GridItem>
				<GridItem my={4}>
					<Button width="full" variant="error">
						Reset password
					</Button>
				</GridItem>
				{/* Sign Up Button */}
				<GridItem my={4}>
					<SubmitButton width="full" variant="success">
						Save changes
					</SubmitButton>
				</GridItem>
			</SimpleGrid>
		</Form>
	);
};

export default ProfileForm;
