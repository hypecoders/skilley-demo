import { UseToastOptions } from '@chakra-ui/toast';
import { withFormik } from 'formik';

import { LoginDefaults, toastProps } from '../../common/defaults';
import { LoginModel } from '../../common/models';
import { LoginSchema } from '../../common/validations';
import { FBErrorCode, useFirebaseError } from '../../hooks/useFirebaseError';
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
				title: 'Logged in.',
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
})(LoginForm);
