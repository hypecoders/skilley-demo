import { UseToastOptions } from '@chakra-ui/toast';
import { withFormik } from 'formik';
import { User } from '@firebase/auth';
import { updateDoc } from '@firebase/firestore';

import { toastProps } from '../../common/defaults';
import { ProfileModel } from '../../common/models';
import { usersDataDoc } from '../../utils/firebase';
import ProfileForm from '../auth/ProfileForm';
import { ProfileSchema } from '../../common/validations';
import { UserData } from '../../common/db';

type Props = {
	user?: User;
	userData?: UserData;
	toast: (options?: UseToastOptions) => void;
};

export const ProfileController = withFormik<Props, ProfileModel>({
	mapPropsToValues: props => ({
		firstName: props.userData?.firstName ?? '',
		lastName: props.userData?.lastName ?? '',
		email: props.user?.email ?? '',
		locations: props.userData?.locations ?? [],
		skills: props.userData?.skills ?? [],
		userData: props.userData,
		user: props.user,
		toast: props.toast
	}),
	validationSchema: ProfileSchema,
	handleSubmit: async (
		{ firstName, lastName, locations, skills, user, toast },
		{ setSubmitting }
	) => {
		try {
			if (user) {
				console.log(firstName, lastName, locations, skills);
				await updateDoc(usersDataDoc(user.uid), {
					uid: user.uid,
					firstName,
					lastName,
					locations,
					skills
				});
				toast({
					title: 'Profile updated.',
					status: 'success',
					...toastProps
				});
			}
			setSubmitting(false);
		} catch (err) {
			toast({
				title: 'Fail.',
				description: 'Unknown error occured.',
				status: 'error',
				...toastProps
			});
			setSubmitting(false);
		}
	}
})(ProfileForm);
