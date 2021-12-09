import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/layout';
import { getDocs } from '@firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import {
	Button,
	Grid,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

import { UserData } from '../common/db';
import Loading from '../components/Loading';
import { usersDataCollection } from '../utils/firebase';
import colors from '../utils/theme/colors';
// import Card from '../components/Card';
import skillList from '../common/skillList';
import SmallCard from '../components/SmallCard';

const Locations = [
	{ value: 'slovakia', label: 'Slovakia' },
	{ value: 'czechia', label: 'Czech Republic' },
	{ value: 'remote', label: 'Remote' }
];

const Pool = () => {
	const [users, setUsers] = useState<UserData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [locations, setLocations] = useState<string[]>([]);
	const [skills, setSkills] = useState<string[]>([]);
	const [idx, setIdx] = useState<number>(0);

	const filtredUsers = useMemo(
		() =>
			users
				.filter(user => skills.every(val => user.skills?.includes(val)))
				.filter(user => locations.every(val => user.locations?.includes(val))),
		[locations, skills, users]
	);

	const increment = () => {
		setIdx(idx + 4);
	};

	const decrement = () => {
		setIdx(idx - 4);
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const querySnapshot = await getDocs(usersDataCollection);
			querySnapshot.forEach(doc => {
				setUsers(prevUsers => [...prevUsers, doc.data()]);
			});
			setIsLoading(false);
		};

		fetchData();
	}, []);

	useEffect(() => {
		setIdx(0);
	}, [filtredUsers]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container pt={10} display="flex" height="100vh" maxW="3xl">
			<Stack as={Box} textAlign="center" spacing={{ base: 8, md: 3 }} w="full">
				<Heading
					fontWeight={600}
					fontSize={{ base: '2xl', md: '4xl' }}
					lineHeight="110%"
				>
					Search for
					<Text as="span" color={colors.brand[600]}>
						{' '}
						talented{' '}
					</Text>
					people
				</Heading>
				<Box>
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
										borderColor={
											skills.includes(skill) ? 'brand.500' : 'gray.300'
										}
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
					<Popover>
						<PopoverTrigger>
							<Button mx={5} variant="primary">
								Locations
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
											locations.includes(location.value)
												? 'brand.500'
												: 'gray.300'
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
				</Box>
				<Flex
					mt={0}
					// height="full"
					direction="row"
					align="center"
					// justifyContent="center"
				>
					<IconButton
						variant="onlyIcon"
						disabled={filtredUsers.length < 5 || idx - 4 < 0}
						onClick={decrement}
						aria-label="<-"
						icon={<ArrowBackIcon h={8} w={8} />}
						display={filtredUsers.length === 0 ? 'none' : ''}
					/>

					<Grid
						templateRows="repeat(2, 1fr)"
						templateColumns="repeat(2, 1fr)"
						gap={1}
					>
						{filtredUsers.slice(idx, idx + 4).map((_, i) => (
							<SmallCard
								key={filtredUsers[idx + i].uid}
								user={filtredUsers[idx + i]}
							/>
						))}
					</Grid>
					<IconButton
						variant="onlyIcon"
						disabled={filtredUsers.length < 5 || filtredUsers.length - idx < 4}
						display={filtredUsers.length === 0 ? 'none' : ''}
						onClick={increment}
						aria-label="->"
						icon={<ArrowForwardIcon h={8} w={8} />}
					/>
				</Flex>
			</Stack>
		</Container>
	);
};

export default Pool;
