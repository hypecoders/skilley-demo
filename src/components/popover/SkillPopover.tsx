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

import skillList from '../../common/skillList';

type Props = {
	skills: string[];
	setSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

const SkillPopover = ({ skills, setSkills }: Props) => (
	<Popover>
		<PopoverTrigger>
			<Button mx={2} variant="primary">
				{`Skills ${skills.length > 0 ? `(${skills.length})` : ''}`}
			</Button>
		</PopoverTrigger>
		<PopoverContent>
			<PopoverArrow />
			<PopoverCloseButton />
			<PopoverHeader>Filter skills</PopoverHeader>
			<PopoverBody>
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
			</PopoverBody>
		</PopoverContent>
	</Popover>
);

export default SkillPopover;
