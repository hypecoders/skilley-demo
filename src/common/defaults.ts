import { UseToastOptions } from '@chakra-ui/toast';
import { Timestamp } from '@firebase/firestore';

import { Question, TestData } from './db';

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

export const QuestionDefaults: Question = {
	number: 1,
	title: '',
	description: '',
	type: 'singleLine'
};

export const TestDefaults: TestData = {
	title: '',
	created: Timestamp.now(),
	modified: Timestamp.now(),
	closingRule: 'manual',
	status: 'draft',
	messages: {
		privacy:
			"Skilley doesn't record or process sensitive information such as passwords, credit card numbers, etc. UXtweak will never provide your data to third parties.",
		welcome:
			"Welcome to this Test, and thank you for agreeing to participate! The activity shouldn't take longer than 10 to 15 minutes to complete. You will be contacted by a recruiter according to your results.",
		thanks:
			'All done, awesome! Thanks again for your participation. You may now leave this web page or close this window.',
		closed:
			"Sorry, this test has concluded. This test has been closed and so it's no longer possible to participate. If you think that this is a mistake and you should still be able to participate, please contact the conductor of the test. We hope to see you again."
	},
	questionIntro: {
		title: 'Test questions',
		message: 'Please, answer the following questions.'
	},
	questions: [QuestionDefaults],
	participants: []
};
