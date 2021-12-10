import { Box, Center, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TestData } from '../../../common/db';
import { NewTestController } from '../../../components/hoc/NewTestController';
import Loading from '../../../components/Loading';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { getTestData } from '../../../utils/firebase';

const NewTest = () => {
	const [searchParams] = useSearchParams();
	const [testData, setTestData] = useState<TestData>();
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const user = useLoggedInUser();
	const toast = useToast();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				try {
					const testData = await getTestData(searchParams.get('id') as never);
					setTestData(testData.data());
				} catch (err) {
					setError(true);
				}
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	{
		isLoading && <Loading />;
	}

	{
		isError && <Center>Error while loading data</Center>;
	}

	return (
		<Box mx={10}>
			{testData && <NewTestController testData={testData} toast={toast} />}
		</Box>
	);
};

export default NewTest;
