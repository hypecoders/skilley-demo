import {
	IconButton,
	Avatar,
	Box,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Text,
	FlexProps,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	useToast
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { UserData } from '../../../common/db';
import { toastProps } from '../../../common/defaults';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { getUserData, signOut } from '../../../utils/firebase';
import Logo from '../../Logo';

type MobileProps = {
	onOpen: () => void;
} & FlexProps;

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const user = useLoggedInUser();
	const toast = useToast();
	const navigate = useNavigate();

	const [userData, setuserData] = useState<UserData>();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				const userData = await getUserData(user?.uid.toString());
				if (userData.exists()) {
					setuserData(userData.data());
				}
			}
		};
		fetchData();
	}, []);

	const onSignOut = () => {
		navigate('/');
		signOut();
		toast({
			title: 'Logged out.',
			status: 'success',
			...toastProps
		});
	};

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Box display={{ base: 'flex', md: 'none' }}>
				<Logo />
			</Box>

			<HStack spacing={{ base: '0', md: '6' }}>
				{/* <IconButton
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/> */}
				<Flex alignItems="center">
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: 'none' }}
						>
							<HStack>
								{/* user */}
								<Avatar
									bg="brand.300"
									size="sm"
									name={userData?.firstName}
									src={userData?.icon}
								/>
								<VStack
									display={{ base: 'none', md: 'flex' }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">
										{user?.displayName}
										{user?.email}
									</Text>
									<Text fontSize="xs" color="gray.600">
										User
									</Text>
								</VStack>
								<Box display={{ base: 'none', md: 'flex' }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue('white', 'gray.900')}
							borderColor={useColorModeValue('gray.200', 'gray.700')}
						>
							<MenuItem onClick={() => navigate('/app/profile')}>
								Profile
							</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuDivider />
							<MenuItem onClick={() => navigate('/')}>To home page</MenuItem>
							<MenuItem onClick={onSignOut}>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

export default MobileNav;
