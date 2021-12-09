import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import { getDocs } from '@firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { IconButton, SlideFade, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

import { UserData } from '../common/db';
import Loading from '../components/Loading';
import { usersDataCollection } from '../utils/firebase';
import colors from '../utils/theme/colors';
import SkillPopover from '../components/popover/SkillPopover';
import LocationPopover from '../components/popover/LocationPopover';
import BigProfileCard from '../components/BigProfileCard';
import useWindowDimensions from '../hooks/windowDimensions';

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
		<Stack
			as={Box}
			textAlign="center"
			w="full"
			height={{ base: height - 56.99 - 39.99, md: height - 56.99 - 47.98 }}
		>
			<Heading
				mt={{ base: 2, md: 20 }}
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
				<SkillPopover skills={skills} setSkills={setSkills} />
				<LocationPopover locations={locations} setLocations={setLocations} />
			</Box>
			<Flex
				height="full"
				w="full"
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
				/>
				<Box w={{ base: 250, md: 300 }}>
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
				/>
			</Flex>
		</Stack>
	);
};

export default Pool;
