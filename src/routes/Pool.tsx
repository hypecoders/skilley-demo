import { Box, Flex, Heading } from '@chakra-ui/layout';
import { getDocs } from '@firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import {
	Grid,
	IconButton,
	Menu,
	MenuButton,
	MenuGroup,
	MenuList,
	SlideFade,
	Text
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon, EditIcon } from '@chakra-ui/icons';

import { UserData } from '../common/db';
import Loading from '../components/Loading';
import { usersDataCollection } from '../utils/firebase';
import colors from '../utils/theme/colors';
import SkillPopover from '../components/popover/SkillPopover';
import LocationPopover from '../components/popover/LocationPopover';
import BigProfileCard from '../components/BigProfileCard';
import useWindowDimensions from '../hooks/windowDimensions';
import LocationWrap from '../components/Wraps/LocationWrap';
import SkillWrap from '../components/Wraps/SkillWrap';

const Pool = () => {
	const [users, setUsers] = useState<UserData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [locations, setLocations] = useState<string[]>([]);
	const [skills, setSkills] = useState<string[]>([]);
	const [idx, setIdx] = useState<number>(0);
	const [animate, setAnimate] = useState<boolean>(true);
	const [toLeft, setToLeft] = useState<boolean>(true);
	const { height } = useWindowDimensions();

	const filtredUsers = useMemo(
		() =>
			users
				.filter(user => skills.every(val => user.skills?.includes(val)))
				.filter(user => locations.every(val => user.locations?.includes(val))),
		[locations, skills, users]
	);

	const incrementIdx = () => {
		setToLeft(true);
		setAnimate(false);

		setTimeout(() => {
			setToLeft(false);
			setAnimate(true);
			if (idx === filtredUsers.length - 1) {
				setIdx(0);
			} else {
				setIdx(idx + 1);
			}
		}, 200);
	};

	const decrementIdx = () => {
		setToLeft(false);
		setAnimate(false);

		setTimeout(() => {
			setToLeft(true);
			setAnimate(true);
			if (idx === 0) {
				setIdx(filtredUsers.length - 1);
			} else {
				setIdx(idx - 1);
			}
		}, 200);
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

	useEffect(() => {
		console.log(animate);
	}, [animate, setAnimate]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Flex
			as={Box}
			textAlign="center"
			w="full"
			height={{ base: height - 56.99 - 39.99, md: height - 56.99 - 47.98 }}
			direction="column"
			align="center"
		>
			<Heading
				mt={{ base: 10, md: 20 }}
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

			<Grid
				templateColumns={{ base: '', md: 'repeat(2, 1fr)' }}
				templateRows={{ base: 'repeat(1, 1fr)', md: '' }}
				h="100%"
			>
				<Flex
					w="full"
					h="100%"
					direction="row"
					align="center"
					justifyContent="center"
					overflowY="hidden"
				>
					<IconButton
						variant="onlyIcon"
						onClick={decrementIdx}
						aria-label="<-"
						icon={<ArrowBackIcon h={8} w={8} />}
						display={filtredUsers.length < 2 ? 'none' : ''}
						_focus={{
							ring: 0
						}}
					/>
					<Box overflow="hidden" w={{ base: 250, md: 300 }}>
						{filtredUsers[idx] && (
							<SlideFade
								in={animate}
								offsetX={toLeft ? '-300px' : '300px'}
								unmountOnExit
							>
								<BigProfileCard user={filtredUsers[idx]} />
							</SlideFade>
						)}
					</Box>

					<IconButton
						variant="onlyIcon"
						display={filtredUsers.length < 2 ? 'none' : ''}
						onClick={incrementIdx}
						aria-label="->"
						icon={<ArrowForwardIcon h={8} w={8} />}
						_focus={{
							ring: 0
						}}
					/>
				</Flex>
				<Menu>
					<MenuButton
						as={IconButton}
						align="center"
						justifyContent="center"
						size="lg"
						position="fixed"
						left={4}
						bottom={14}
						bg="brand.500"
						color="white"
						borderRadius="20px"
						display={{ base: 'flex', md: 'none' }}
						icon={<EditIcon size="lg" />}
						aria-label="+"
						_hover={{ backgroundColor: 'brand.500' }}
						_active={{
							backgroundColor: 'brand.500'
						}}
						_focus={{
							ring: 0
						}}
					>
						Profile
					</MenuButton>
					<MenuList border="2px" borderRadius="xl" borderColor="brand.500">
						<MenuGroup title="Filters">
							<SkillPopover skills={skills} setSkills={setSkills} />
							<LocationPopover
								locations={locations}
								setLocations={setLocations}
							/>
						</MenuGroup>
					</MenuList>
				</Menu>
				<Flex
					display={{ base: 'none', md: 'flex' }}
					flexDirection="column"
					align="center"
					justifyContent="center"
				>
					<SkillWrap skills={skills} setSkills={setSkills} />
					<LocationWrap locations={locations} setLocations={setLocations} />
				</Flex>
			</Grid>
		</Flex>
	);
};

export default Pool;
