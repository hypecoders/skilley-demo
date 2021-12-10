import { Box, Divider, Radio, Text, useToast, VStack } from '@chakra-ui/react';
import { Timestamp } from '@firebase/firestore';
import { InputControl, RadioGroupControl } from 'formik-chakra-ui';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toastProps } from '../../../common/defaults';
import { getFormValues } from '../../../utils';
import { updateTestData } from '../../../utils/firebase';
import FormLabel from '../../FormLabel';

type Props = {
	created: Timestamp;
	modified: Timestamp;
	conductor: string;
};

const TabGeneral = ({ created, modified, conductor }: Props) => {
	const [searchParams] = useSearchParams();
	const toast = useToast();

	const handleBlur = useCallback(async e => {
		const newTitle = getFormValues(e.target).title;
		try {
			await updateTestData(searchParams.get('id') as never, {
				title: newTitle
			});
		} catch (err) {
			toast({
				title: 'Fail.',
				description: 'Unknown error occured.',
				status: 'error',
				...toastProps
			});
		}
	}, []);

	return (
		<Box mb={6}>
			<Text fontSize="xl" fontWeight="bold">
				General settings
			</Text>
			<Text fontSize="sm" fontWeight="medium" color="gray.500">
				Edit general settings of your test
			</Text>
			<Divider mt={2} mb={6} />
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
						<InputControl name="title" onBlur={handleBlur} />
					</Box>
					<Box>
						<Text fontSize="sm" fontWeight="semibold" color="gray.400">
							Created on
						</Text>
						<Text mb={2}>
							{created.toDate().toLocaleDateString()} by {conductor}
						</Text>
						<Text fontSize="sm" fontWeight="semibold" color="gray.400">
							Last modified
						</Text>
						<Text>
							{modified.toDate().toLocaleDateString()} by {conductor}
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
