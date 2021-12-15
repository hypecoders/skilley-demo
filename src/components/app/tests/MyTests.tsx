import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { Flex, Text, VStack } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import { Tag, TagLabel } from '@chakra-ui/tag';
import { query, where, orderBy, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { HiOutlineTrash as ITrash } from 'react-icons/hi';

import { TestData } from '../../../common/db';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { testsCollection } from '../../../utils/firebase';
import Card from '../../cards/Card';
import Loading from '../../Loading';

const tagColors = {
	active: 'blue',
	draft: 'gray',
	finished: 'green'
};

const MyTests = () => {
	const user = useLoggedInUser();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [tests, setTests] = useState<TestData[]>([]);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const q = query(
			testsCollection,
			where('conductor', '==', user?.email),
			orderBy('created')
		);

		const fetchData = async () => {
			try {
				setIsLoading(true);
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach(doc => {
					setTests(prevTests => [...prevTests, doc.data()]);
				});
			} catch (err) {
				console.error(err);
				setIsError(true);
			}

			setIsLoading(false);
		};

		fetchData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Center h="70vh">Error while loading data</Center>;
	}

	if (tests.length === 0) {
		return <Center h="70vh">No tests</Center>;
	}

	return (
		<VStack spacing={10} my={12}>
			{tests.map(test => (
				<Card key={test.title} bg="white">
					<Flex
						justify="space-between"
						flexDirection={{ base: 'column', md: 'row' }}
						align={{ base: 'left', md: 'center' }}
					>
						<VStack spacing={2} align="start">
							<Tag colorScheme={tagColors[test.status]} borderRadius="full">
								<TagLabel fontSize="xs" fontWeight="bold">
									{test.status}
								</TagLabel>
							</Tag>
							<Text fontSize="xl" fontWeight="bold">
								{test.title}
							</Text>
							<Text fontSize="sm" color="gray.400" fontWeight={500}>
								Created on {test.created.toDate().toLocaleDateString()}
							</Text>
						</VStack>
						<ButtonGroup mt={{ base: 4, md: 0 }} variant="ghost" spacing={4}>
							{test.status === 'draft' && <Button>Setup</Button>}
							{(test.status === 'finished' || test.status === 'active') && (
								<Button>Results</Button>
							)}
							<IconButton icon={<ITrash />} aria-label="Trash button" />
						</ButtonGroup>
					</Flex>
				</Card>
			))}
		</VStack>
	);
};

export default MyTests;
