import { UseToastOptions } from '@chakra-ui/toast';
import { withFormik } from 'formik';

import { RegistrationDefaults } from '../../common/defaults';
import { RegistrationModel } from '../../common/models';
import { RegistrationSchema } from '../../common/validations';
import {
	FirebaseErrorCode,
	useFirebaseError
} from '../../hooks/useFirebaseError';
import { signUp } from '../../utils/firebase';
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
		{ email, password, onClose, toast },
		{ setSubmitting }
	) => {
		try {
			await signUp(email, password);
			toast({
				title: 'Account created.',
				description: "We've created your account for you.",
				status: 'success',
				position: 'bottom-left',
				duration: 4000,
				isClosable: true
			});
			setSubmitting(false);
			onClose();
		} catch (err) {
			const fbErr = useFirebaseError();
			toast({
				title: 'Registration failed.',
				description: fbErr(
					(err as { code?: FirebaseErrorCode })?.code ?? 'unknown_error'
				),
				status: 'error',
				position: 'bottom-left',
				duration: 4000,
				isClosable: true
			});
			setSubmitting(false);
		}
	}
})(RegisterForm);
