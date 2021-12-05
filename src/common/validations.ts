import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
	firstName: Yup.string().required('Required'),
	lastName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	password: Yup.string()
		.min(6, 'Password must contain at least 6 characters')
		.required('Required'),
	confirmPassword: Yup.string()
		.required('Required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
});
