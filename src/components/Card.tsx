import { Box, BoxProps } from '@chakra-ui/layout';
import { FC } from 'react';

const Card: FC<BoxProps> = ({ children, ...rest }) => (
	<Box
		border="2px"
		borderColor="gray.50"
		boxShadow="md"
		rounded="xl"
		w="full"
		px={10}
		py={6}
		{...rest}
	>
		{children}
	</Box>
);

export default Card;
