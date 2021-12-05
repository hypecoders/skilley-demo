import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Button, Checkbox, Stack } from '@chakra-ui/react';
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

				{/* Remember Me & Forgot pass? */}
				<GridItem colSpan={2}>
					<Stack justify="space-between" direction={['column', 'row']}>
						<Checkbox checked isDisabled>
							Remember me
						</Checkbox>
						<Button
							alignSelf="start"
							variant="link"
							color="brand.500"
							pt={[3, 0]}
						>
							Forgot password?
						</Button>
					</Stack>
				</GridItem>

				{/* Log in Button */}
				<GridItem colSpan={2} my={4}>
					<SubmitButton variant="primary" size={buttonSize} w="full">
						Sign In
					</SubmitButton>
				</GridItem>
			</SimpleGrid>
		</Form>
	);
};

export default LoginForm;
