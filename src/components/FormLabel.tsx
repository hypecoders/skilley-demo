import { FormLabel as FormLabelChakra } from '@chakra-ui/form-control';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const FormLabel: FC<{ required?: boolean }> = ({ required, children }) => (
	<Flex fontWeight="bold">
		<FormLabelChakra fontWeight="bold">{children}</FormLabelChakra>
		{required && (
			<Text color="red.600" fontSize="lg" mx={-1}>
				*
			</Text>
		)}
	</Flex>
);

export default FormLabel;
