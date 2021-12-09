import { Box, Button, Flex, Heading, useToast } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { HiOutlineChevronRight as INew } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import { customAlphabet } from 'nanoid';

import MyTests from '../../../components/app/tests/MyTests';
import { setTestData } from '../../../utils/firebase';
import { TestDefaults, toastProps } from '../../../common/defaults';

const nanoid = customAlphabet(
	'1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	4
);

const Tests = () => {
	const navigate = useNavigate();
	const toast = useToast();
	const [isSubmitting, setSubmitting] = useState(false);

	const initTest = useCallback(async () => {
		setSubmitting(true);
		const testId = nanoid();
		try {
			await setTestData(testId, {
				...TestDefaults,
				title: `New test #${testId}`
			});
			setSubmitting(false);
			navigate(`/app/tests/new?id=${testId}`);
		} catch (err) {
			toast({
				title: 'Fail.',
				description: 'Unknown error occured.',
				status: 'error',
				...toastProps
			});
			setSubmitting(false);
		}
	}, []);

	return (
		<Box mx={{ md: 10 }}>
			<Flex justify="space-between" align="center">
				<Heading>My Tests</Heading>
				<Button
					onClick={initTest}
					variant="primary"
					rightIcon={<INew />}
					iconSpacing={2}
					isLoading={isSubmitting}
				>
					New test
				</Button>
			</Flex>
			<MyTests />
		</Box>
	);
};

export default Tests;
