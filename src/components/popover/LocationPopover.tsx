import {
	Button,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger
} from '@chakra-ui/react';

import { Locations } from '../../common/db';

type Props = {
	locations: string[];
	setLocations: React.Dispatch<React.SetStateAction<string[]>>;
};

const LocationPopover = ({ locations, setLocations }: Props) => (
	<Popover>
		<PopoverTrigger>
			<Button mx={2} variant="primary">
				{`Locations ${locations.length > 0 ? `(${locations.length})` : ''}`}
			</Button>
		</PopoverTrigger>
		<PopoverContent>
			<PopoverArrow />
			<PopoverCloseButton />
			<PopoverHeader>Filter locations</PopoverHeader>
			<PopoverBody>
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
			</PopoverBody>
		</PopoverContent>
	</Popover>
);

export default LocationPopover;
