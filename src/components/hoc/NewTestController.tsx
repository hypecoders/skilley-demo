import { UseToastOptions } from '@chakra-ui/toast';
import { withFormik } from 'formik';

import { TestData } from '../../common/db';
import NewTestForm from '../app/tests/NewTestForm';

type Props = {
	testData: TestData;
	toast: (options?: UseToastOptions) => void;
};

export const NewTestController = withFormik<Props, TestData>({
	mapPropsToValues: props => ({
		title: props.testData.title,
		created: props.testData.created,
		modified: props.testData.modified,
		closingRule: props.testData.closingRule,
		status: props.testData.status,
		messages: props.testData.messages,
		questionIntro: props.testData.questionIntro,
		questions: props.testData.questions,
		participants: props.testData.participants,
		primaryColor: props.testData.branding?.primary,
		secondaryColor: props.testData.branding?.secondary,
		toast: props.toast
	}),
	handleSubmit: async () => {
		// handle submit
	}
})(NewTestForm);
