import { useState } from 'react';
import { Box, Wrap, WrapItem } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { CheckboxControl } from 'formik-chakra-ui';

import skillList from '../../../common/skillList';
import FormLabel from '../../FormLabel';

const Skills = () => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	return (
		<Box mt={5}>
			<FormLabel>Skills</FormLabel>
			<Wrap
				borderColor={selectedOptions.length ? 'brand.500' : 'gray.300'}
				borderWidth={1}
				spacing="2px"
				borderRadius="25px"
				p={2}
			>
				{skillList.map(option => (
					<WrapItem key={option}>
						<Button
							as={CheckboxControl}
							variant="skill"
							name="skills"
							value={option}
							key={option}
							borderColor={
								selectedOptions.includes(option) ? 'brand.500' : 'gray.300'
							}
							onClick={() =>
								setSelectedOptions(
									selectedOptions.includes(option)
										? selectedOptions.filter(item => item !== option)
										: prevOptions => [...prevOptions, option]
								)
							}
						>
							{option}
						</Button>
					</WrapItem>
				))}
			</Wrap>
		</Box>
	);
};

export default Skills;
