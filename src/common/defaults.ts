import { UseToastOptions } from '@chakra-ui/toast';

export const RegistrationDefaults = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	locations: []
};

export const LoginDefaults = {
	email: '',
	password: ''
};

export const ProfileDefaults = {
	firstName: '',
	lastName: '',
	email: '',
	locations: [],
	skills: []
};

export const errorMessageProps = { fontWeight: '600', fontSize: 'xs' };

export const toastProps: UseToastOptions = {
	position: 'bottom-left',
	duration: 5000,
	isClosable: true
};
