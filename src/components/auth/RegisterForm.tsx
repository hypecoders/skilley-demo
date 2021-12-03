import { Button } from '@chakra-ui/button';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { GridItem, SimpleGrid, Stack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useState } from 'react';

const RegisterForm = () => {
	const colSpan = useBreakpointValue({ base: 2, md: 1 });
	const [showPassword, setShowPassword] = useState(false);

	return (
		<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
			{/* First Name */}
			<GridItem colSpan={colSpan}>
				<FormControl id="firstName" isRequired>
					<FormLabel>First Name</FormLabel>
					<Input type="text" placeholder="John" />
				</FormControl>
			</GridItem>
			{/* Last Name */}
			<GridItem colSpan={colSpan}>
				<FormControl id="lastName" isRequired>
					<FormLabel>Last Name</FormLabel>
					<Input type="text" placeholder="Doe" />
				</FormControl>
			</GridItem>
			{/* Email */}
			<GridItem colSpan={2}>
				<FormControl id="email" isRequired>
					<FormLabel>Email address</FormLabel>
					<Input type="email" placeholder="johndoe@example.com" />
				</FormControl>
			</GridItem>
			{/* Password */}
			<GridItem colSpan={2}>
				<FormControl id="password" isRequired>
					<FormLabel>Password</FormLabel>
					<InputGroup>
						<Input type={showPassword ? 'text' : 'password'} />
						<InputRightElement h="full">
							<Button
								variant="ghost"
								onClick={() => setShowPassword(showPassword => !showPassword)}
							>
								{showPassword ? <ViewIcon /> : <ViewOffIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
			</GridItem>
			{/* Location */}
			<GridItem colSpan={2}>
				<FormControl as="fieldset">
					<FormLabel>Preferred Location</FormLabel>
					<CheckboxGroup>
						<Stack direction={['column', 'row']} spacing={4}>
							<Checkbox value="slovakia">Slovakia</Checkbox>
							<Checkbox value="czechia">Czech Republic</Checkbox>
							<Checkbox value="remote">Remote</Checkbox>
						</Stack>
					</CheckboxGroup>
				</FormControl>
			</GridItem>
		</SimpleGrid>
	);
};

export default RegisterForm;
