import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/react';
import { Form } from 'formik';
import {
	CheckboxContainer,
	CheckboxControl,
	InputControl,
	SubmitButton
} from 'formik-chakra-ui';

import { errorMessageProps } from '../../common/defaults';
import FormLabel from '../FormLabel';
import Skills from '../Skills';

const ProfileForm = () => {
	const colSpan = useBreakpointValue({ base: 2, md: 1 });
	return (
		<Form>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
				{/* First Name */}
				<GridItem colSpan={colSpan}>
					<FormLabel>First Name</FormLabel>
					<InputControl name="firstName" {...errorMessageProps} />
				</GridItem>

				{/* Last Name */}
				<GridItem colSpan={colSpan}>
					<FormLabel>Last Name</FormLabel>
					<InputControl name="lastName" {...errorMessageProps} />
				</GridItem>

				{/* Email */}
				<GridItem colSpan={2}>
					<FormLabel>Email address</FormLabel>
					<InputControl name="email" {...errorMessageProps} />
				</GridItem>

				{/* Location */}
				<GridItem colSpan={2}>
					<FormLabel>Preferred location</FormLabel>
					<CheckboxContainer
						name="locations"
						stackProps={{ pl: 0, spacing: 4, direction: ['column', 'row'] }}
					>
						<CheckboxControl name="locations" value="slovakia">
							Slovakia
						</CheckboxControl>
						<CheckboxControl name="locations" value="czechia">
							Czech Republic
						</CheckboxControl>
						<CheckboxControl name="locations" value="remote">
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
				<GridItem mt={4} mb={8}>
					<SubmitButton width="full" variant="success">
						Save changes
					</SubmitButton>
				</GridItem>
			</SimpleGrid>
		</Form>
	);
};

export default ProfileForm;
