import { Box, BoxProps } from '@chakra-ui/layout';
import { FC } from 'react';

const Card: FC<BoxProps> = ({ children, ...rest }) => (
	<Box
		border="8px"
		borderColor="gray.50"
		boxShadow="2xl"
		rounded="2xl"
		w="full"
		p={6}
		{...rest}
	>
		{children}
	</Box>
);

export default Card;
