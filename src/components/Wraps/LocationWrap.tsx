import { Wrap } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

import { Locations } from '../../common/db';

type Props = {
	locations: string[];
	setLocations: React.Dispatch<React.SetStateAction<string[]>>;
};

const LocationWrap = ({ locations, setLocations }: Props) => (
	<Wrap
		bg="white"
		borderColor={locations.length ? 'brand.500' : 'gray.300'}
		borderWidth={1}
		spacing="2px"
		borderRadius="25px"
		p={2}
		m={10}
	>
		{Locations.map(location => (
			<Button
				key={location.value}
				variant="skill"
				borderColor={
					locations.includes(location.value) ? 'brand.500' : 'gray.300'
				}
				onClick={() =>
					setLocations(
						locations.includes(location.value)
							? locations.filter(item => item !== location.value)
							: prevLocations => [...prevLocations, location.value]
					)
				}
			>
				{location.label}
			</Button>
		))}
	</Wrap>
);

export default LocationWrap;
