import { UseToastOptions } from '@chakra-ui/toast';
import { withFormik } from 'formik';

import { LoginDefaults } from '../../common/defaults';
import { LoginModel } from '../../common/models';
import { LoginSchema } from '../../common/validations';
import {
	FirebaseErrorCode,
	useFirebaseError
} from '../../hooks/useFirebaseError';
import { signIn } from '../../utils/firebase';
import LoginForm from '../auth/LoginForm';

type Props = {
	onClose: () => void;
	toast: (options?: UseToastOptions) => void;
};

export const LoginController = withFormik<Props, LoginModel>({
	mapPropsToValues: props => ({
		...LoginDefaults,
		onClose: props.onClose,
		toast: props.toast
	}),
	validationSchema: LoginSchema,
	handleSubmit: async (
		{ email, password, onClose, toast },
		{ setSubmitting }
	) => {
		try {
			await signIn(email, password);
			toast({
				title: 'Logged in',
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
				title: 'Logging in failed.',
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
})(LoginForm);
