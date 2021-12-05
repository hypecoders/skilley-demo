import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Form } from 'formik';
import { InputControl, SubmitButton } from 'formik-chakra-ui';

import { errorMessageProps } from '../../common/defaults';
import FormLabel from '../FormLabel';

const LoginForm = () => {
	const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

	return (
		<Form>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
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

				{/* Log in Button */}
				<GridItem colSpan={2} mt={4}>
					<SubmitButton variant="primary" size={buttonSize} w="full">
						Log in
					</SubmitButton>
				</GridItem>
			</SimpleGrid>
		</Form>
	);
};

export default LoginForm;
