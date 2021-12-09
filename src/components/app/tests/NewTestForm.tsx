import { Divider, Flex, Text, HStack, VStack } from '@chakra-ui/layout';
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Tag,
	TagLabel,
	Icon,
	Button
} from '@chakra-ui/react';
import { Form, FormikProps } from 'formik';
import {
	HiOutlineClipboardCheck as ITest,
	HiOutlineSpeakerphone as ILaunch
} from 'react-icons/hi';

import { TestData } from '../../../common/db';
import { capitalizeFirstLetter } from '../../../utils';

import TabGeneral from './TabGeneral';

const tagColors = {
	active: 'blue',
	draft: 'gray',
	finished: 'green'
};

const NewTestForm = (props: FormikProps<TestData>) => {
	const { values } = props;
	return (
		<Form>
			<Flex justify="space-between" align="center" mb={10}>
				<HStack spacing={4}>
					<Icon as={ITest} w={16} h={16} color="brand.500" />
					<VStack spacing={1} align="start">
						<Text fontSize="2xl" fontWeight="bold">
							{values.title}
						</Text>
						<Tag colorScheme={tagColors[values.status]} borderRadius="full">
							<TagLabel fontSize="xs" fontWeight="bold">
								{capitalizeFirstLetter(values.status)}
							</TagLabel>
						</Tag>
					</VStack>
				</HStack>
				<Button
					variant="success"
					leftIcon={<ILaunch size={20} />}
					iconSpacing={2}
				>
					Launch
				</Button>
			</Flex>
			<Tabs variant="pills" isLazy>
				<TabList>
					<Tab>General</Tab>
					<Tab>Messages</Tab>
					<Tab>Questions</Tab>
					<Tab>Branding</Tab>
				</TabList>
				<Divider my={4} />
				<TabPanels>
					<TabPanel>
						<TabGeneral created={values.created} modified={values.modified} />
					</TabPanel>
					<TabPanel>
						<p>messages specification</p>
					</TabPanel>
					<TabPanel>
						<p>questionning</p>
					</TabPanel>
					<TabPanel>
						<p>branding customization</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Form>
	);
};

export default NewTestForm;
