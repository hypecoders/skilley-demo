import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { Flex, Text, VStack } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/tag';
import { HiOutlineTrash as ITrash } from 'react-icons/hi';

import Card from '../../Card';

type Test = {
	title: string;
	created: string;
	status: string;
	tagColor: string;
};

const MY_TESTS: Array<Test> = [
	{
		title: 'Javascript intermediate level',
		created: 'December 6, 2021',
		status: 'DRAFT',
		tagColor: 'gray'
	},
	{
		title: 'React & Typescript junior',
		created: 'January 17, 2020',
		status: 'ACTIVE',
		tagColor: 'blue'
	},
	{
		title: 'Vacuumlabs Kotlin engineer',
		created: 'March 11, 2017',
		status: 'FINISHED',
		tagColor: 'green'
	}
];

const MyTests = () => (
	<VStack spacing={10} my={12}>
		{MY_TESTS.map(test => (
			<Card key={test.title} bg="white">
				<Flex justify="space-between" align="center">
					<VStack spacing={2} align="start">
						<Tag colorScheme={test.tagColor} borderRadius="full">
							<TagLabel fontSize="xs" fontWeight="bold">
								{test.status}
							</TagLabel>
						</Tag>
						<Text fontSize="xl" fontWeight="bold">
							{test.title}
						</Text>
						<Text fontSize="sm" color="gray.400" fontWeight={500}>
							Created on {test.created}
						</Text>
					</VStack>
					<ButtonGroup variant="ghost" spacing={4}>
						<Button>Setup</Button>
						<IconButton icon={<ITrash />} aria-label="Trash button" />
					</ButtonGroup>
				</Flex>
			</Card>
		))}
	</VStack>
);

export default MyTests;
