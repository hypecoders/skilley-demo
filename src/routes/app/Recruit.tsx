import { Box, Stack } from '@chakra-ui/layout';
import { getDocs } from '@firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import {
	Grid,
	IconButton,
	Menu,
	MenuButton,
	MenuGroup,
	MenuList
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

import { UserData } from '../../common/db';
import Loading from '../../components/Loading';
import { usersDataCollection } from '../../utils/firebase';
import SmallProfileCard from '../../components/cards/SmallProfileCard';
import SkillPopover from '../../components/popover/SkillPopover';
import LocationPopover from '../../components/popover/LocationPopover';
import UserWrap from '../../components/wraps/UserWrap';
import LocationWrap from '../../components/wraps/LocationWrap';
import SkillWrap from '../../components/wraps/SkillWrap';
import UserPopover from '../../components/popover/UserPopover';

const Recruit = () => {
	const [users, setUsers] = useState<UserData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]);
	const [locations, setLocations] = useState<string[]>([]);
	const [skills, setSkills] = useState<string[]>([]);

	const filtredUsers = useMemo(
		() =>
			users
				.filter(user => skills.every(val => user.skills?.includes(val)))
				.filter(user => locations.every(val => user.locations?.includes(val))),
		[locations, skills, users]
	);

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

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Stack as={Box} spacing={{ base: 8, md: 3 }} w="full">
			<Grid
				templateColumns={{ base: '', md: 'repeat(2, 1fr)' }}
				templateRows={{ base: 'repeat(1, 1fr)', md: '' }}
			>
				<Box
					h="79vh"
					overflowY={{ base: 'visible', md: 'scroll' }}
					overflowX="hidden"
				>
					{filtredUsers.map((_, i) => (
						<SmallProfileCard
							key={filtredUsers[i].uid}
							user={filtredUsers[i]}
							selectedUsers={selectedUsers}
							setSelectedUsers={setSelectedUsers}
						/>
					))}
				</Box>
				<Menu>
					<MenuButton
						as={IconButton}
						align="center"
						justifyContent="center"
						size="lg"
						position="fixed"
						bottom={5}
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
				<UserPopover
					selectedUsers={selectedUsers}
					setSelectedUsers={setSelectedUsers}
				/>
				<Box display={{ base: 'none', md: 'block' }}>
					<SkillWrap skills={skills} setSkills={setSkills} />
					<LocationWrap locations={locations} setLocations={setLocations} />
					<UserWrap
						selectedUsers={selectedUsers}
						setSelectedUsers={setSelectedUsers}
					/>
				</Box>
			</Grid>
		</Stack>
	);
};

export default Recruit;
