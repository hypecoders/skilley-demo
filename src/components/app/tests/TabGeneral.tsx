import { Box, Divider, Radio, Text, VStack } from '@chakra-ui/react';
import { Timestamp } from '@firebase/firestore';
import { InputControl, RadioGroupControl } from 'formik-chakra-ui';

import useLoggedInUser from '../../../hooks/useLoggedInUser';
import FormLabel from '../../FormLabel';

type Props = {
	created: Timestamp;
	modified: Timestamp;
};

const TabGeneral = ({ created, modified }: Props) => {
	const user = useLoggedInUser();
	return (
		<Box my={2}>
			<Box
				rounded="xl"
				bg="white"
				p={5}
				border="2px"
				borderColor="gray.100"
				boxShadow="sm"
			>
				<VStack spacing={8} align="left">
					<Box>
						<FormLabel required>Test name</FormLabel>
						<InputControl name="title" />
					</Box>
					<Box>
						<Text fontSize="sm" fontWeight="semibold" color="gray.400">
							Created on
						</Text>
						<Text mb={2}>
							{created.toDate().toLocaleDateString()} by {user?.email}
						</Text>
						<Text fontSize="sm" fontWeight="semibold" color="gray.400">
							Last modified
						</Text>
						<Text>
							{modified.toDate().toLocaleDateString()} by {user?.email}
						</Text>
					</Box>
				</VStack>
			</Box>
			<Text fontSize="xl" fontWeight="bold" mt={12}>
				Options
			</Text>
			<Divider mb={6} mt={2} />
			<Box
				rounded="xl"
				bg="white"
				p={5}
				border="2px"
				borderColor="gray.100"
				boxShadow="sm"
			>
				<FormLabel>Closing rule</FormLabel>
				<RadioGroupControl name="closingRule" stackProps={{ spacing: 6 }}>
					<Radio value="manual">Manual</Radio>
					<Radio value="limit">Respondent limit</Radio>
					<Radio value="date">Date</Radio>
				</RadioGroupControl>
			</Box>
		</Box>
	);
};

export default TabGeneral;
