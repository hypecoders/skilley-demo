import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import { NavItem } from '../../common/type';

import NAV_ITEMS from './navItems';

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');
	const location = useLocation();
	console.log(location.pathname);
	return (
		<Stack direction="row" spacing={4}>
			{location.pathname}
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<Popover trigger="hover" placement="bottom-start">
						<PopoverTrigger>
							<Link
								as={RouterLink}
								p={2}
								to={navItem.href ?? '#'}
								fontSize="sm"
								fontWeight={500}
								color={linkColor}
								textDecoration={
									location.pathname === `/${navItem.label.toLowerCase()}` ||
									(location.pathname === '/' && navItem.label === 'Home')
										? 'underline'
										: 'none'
								}
								_hover={{
									textDecoration: 'underline',
									color: linkHoverColor
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow="xl"
								bg={popoverContentBgColor}
								p={4}
								rounded="xl"
								minW="sm"
							>
								<Stack>
									{navItem.children.map(child => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => (
	<Link
		href={href}
		role="group"
		display="block"
		p={2}
		rounded="md"
		_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
	>
		<Stack direction="row" align="center">
			<Box>
				<Text
					transition="all .3s ease"
					_groupHover={{ color: 'pink.400' }}
					fontWeight={500}
				>
					{label}
				</Text>
				<Text fontSize="sm">{subLabel}</Text>
			</Box>
			<Flex
				transition="all .3s ease"
				transform="translateX(-10px)"
				opacity={0}
				_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
				justify="flex-end"
				align="center"
				flex={1}
			>
				<Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
			</Flex>
		</Stack>
	</Link>
);

export default DesktopNav;
