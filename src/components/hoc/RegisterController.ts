import { UseToastOptions } from '@chakra-ui/toast';
import { setDoc } from '@firebase/firestore';
import { withFormik } from 'formik';

import { RegistrationDefaults, toastProps } from '../../common/defaults';
import { RegistrationModel } from '../../common/models';
import { RegistrationSchema } from '../../common/validations';
import { FBErrorCode, useFirebaseError } from '../../hooks/useFirebaseError';
import { signUp, usersDataDoc } from '../../utils/firebase';
import RegisterForm from '../auth/RegisterForm';

type Props = {
	onClose: () => void;
	toast: (options?: UseToastOptions) => void;
};

export const RegisterController = withFormik<Props, RegistrationModel>({
	mapPropsToValues: props => ({
		...RegistrationDefaults,
		onClose: props.onClose,
		toast: props.toast
	}),
	validationSchema: RegistrationSchema,
	handleSubmit: async (
		{ firstName, lastName, locations, email, password, onClose, toast },
		{ setSubmitting }
	) => {
		try {
			// Register user
			const { user } = await signUp(email, password);
			// Save user data
			await setDoc(usersDataDoc(user.uid), {
				uid: user.uid,
				firstName,
				lastName,
				locations
			});
			// Notify
			toast({
				title: 'Account created.',
				description: 'Happy hacking! ❤️',
				status: 'success',
				...toastProps
			});
			setSubmitting(false);
			onClose();
		} catch (err) {
			const fbe = useFirebaseError();
			toast({
				title: 'Fail.',
				description:
					fbe((err as { code?: FBErrorCode })?.code ?? 'unknown_error') ??
					fbe('unknown_error'),
				status: 'error',
				...toastProps
			});
			setSubmitting(false);
		}
	}
})(RegisterForm);
