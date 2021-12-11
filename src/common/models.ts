import { UseToastOptions } from '@chakra-ui/toast';
import { User } from '@firebase/auth';

import { UserData } from './db';

/**
 *
 * Form field models
 *
 */

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

export type ProfileModel = {
	firstName: string;
	lastName: string;
	email: string;
	locations: string[];
	skills: string[];
	user?: User;
	userData?: UserData;
	toast: (options?: UseToastOptions) => void;
};
