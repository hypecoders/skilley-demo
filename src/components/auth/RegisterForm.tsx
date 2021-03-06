import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Form } from 'formik';
import {
	CheckboxContainer,
	CheckboxControl,
	InputControl,
	SubmitButton
} from 'formik-chakra-ui';

import { errorMessageProps } from '../../common/defaults';
import FormLabel from '../FormLabel';

const RegisterForm = () => {
	const colSpan = useBreakpointValue({ base: 2, md: 1 });
	const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

	return (
		<Form>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
				{/* First Name */}
				<GridItem colSpan={colSpan}>
					<FormLabel required>First Name</FormLabel>
					<InputControl
						name="firstName"
						{...errorMessageProps}
						inputProps={{ placeholder: 'John' }}
					/>
				</GridItem>

				{/* Last Name */}
				<GridItem colSpan={colSpan}>
					<FormLabel required>Last Name</FormLabel>
					<InputControl
						name="lastName"
						{...errorMessageProps}
						inputProps={{ placeholder: 'Doe' }}
					/>
				</GridItem>

				{/* Email */}
				<GridItem colSpan={2}>
					<FormLabel required>Email address</FormLabel>
					<InputControl
						name="email"
						{...errorMessageProps}
						inputProps={{ placeholder: 'johndoe@example.com' }}
					/>
				</GridItem>

				{/* Password */}
				<GridItem colSpan={2}>
					<FormLabel required>Password</FormLabel>
					<InputControl
						name="password"
						{...errorMessageProps}
						inputProps={{ type: 'password' }}
					/>
				</GridItem>

				{/* Confirm Password */}
				<GridItem colSpan={2}>
					<FormLabel required>Confirm password</FormLabel>
					<InputControl
						name="confirmPassword"
						{...errorMessageProps}
						inputProps={{ type: 'password' }}
					/>
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
				</GridItem>

				{/* Sign Up Button */}
				<GridItem colSpan={2} my={4}>
					<SubmitButton variant="primary" size={buttonSize} w="full">
						Sign Up
					</SubmitButton>
				</GridItem>
			</SimpleGrid>
		</Form>
	);
};

export default RegisterForm;
