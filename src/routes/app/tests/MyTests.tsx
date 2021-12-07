import { Button } from '@chakra-ui/button';
import { useNavigate } from 'react-router';

const MyTests = () => {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate('/app/tests/new')} variant="link">
			New Test
		</Button>
	);
};

export default MyTests;
