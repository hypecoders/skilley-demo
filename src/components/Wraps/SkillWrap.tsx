import { Wrap } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

import skillList from '../../common/skillList';

type Props = {
	skills: string[];
	setSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

const SkillWrap = ({ skills, setSkills }: Props) => (
	<Wrap
		borderColor={skills.length ? 'brand.500' : 'gray.300'}
		bg="white"
		borderWidth={1}
		spacing="2px"
		borderRadius="25px"
		p={2}
		m={10}
	>
		{skillList.map(skill => (
			<Button
				key={skill}
				variant="skill"
				borderColor={skills.includes(skill) ? 'brand.500' : 'gray.300'}
				onClick={() =>
					setSkills(
						skills.includes(skill)
							? skills.filter(item => item !== skill)
							: prevSkills => [...prevSkills, skill]
					)
				}
			>
				{skill}
			</Button>
		))}
	</Wrap>
);

export default SkillWrap;
