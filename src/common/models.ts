import { UseToastOptions } from '@chakra-ui/toast';

export type RegistrationModel = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	locations: string[];
	onClose: () => void;
	toast: (options?: UseToastOptions) => void;
};

export type LoginModel = {
	email: string;
	password: string;
	onClose: () => void;
	toast: (options?: UseToastOptions) => void;
};
