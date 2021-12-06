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
		firstName: props.userData?.firstName ? props.userData?.firstName : 'John',
		lastName: props.userData?.lastName ? props.userData?.lastName : 'Doe',
		email: props.user?.email ? props.user.email : 'johndoe@email.com',
		locations: props.userData?.locations ? props.userData?.locations : [],
		skills: props.userData?.skills ? props.userData?.skills : [],
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
				title: 'Profile failed to update.',
				status: 'error',
				...toastProps
			});
			setSubmitting(false);
		}
	}
})(ProfileForm);
