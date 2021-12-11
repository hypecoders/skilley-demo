import { Heading } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

const Logo = () => (
	<Heading as={Link} to="/" fontSize="xl" fontWeight={800}>
		Skilley
	</Heading>
);

export default Logo;
