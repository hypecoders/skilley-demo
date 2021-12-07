import { ReactText } from 'react';
import { Flex, Icon, FlexProps } from '@chakra-ui/react';
import { HiOutlineArrowLeft as ILeftArrow } from 'react-icons/hi';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

type NavItemProps = {
	icon: IconType;
	href: string;
	children: ReactText;
	isActive: boolean;
} & FlexProps;

const SideNavItem = ({
	icon,
	href,
	children,
	isActive,
	...rest
}: NavItemProps) => (
	<RouterLink to={href} style={{ textDecoration: 'none' }}>
		<Flex
			align="center"
			p="4"
			mx="4"
			borderRadius="lg"
			role="group"
			color={isActive ? 'brand.500' : ''}
			fontWeight="bold"
			_hover={{
				bg: 'brand.500',
				color: 'white'
			}}
			{...rest}
		>
			<Icon
				mr="4"
				fontSize="xl"
				_groupHover={{
					color: 'white'
				}}
				as={icon}
			/>
			{children}
			{isActive && <ILeftArrow style={{ marginLeft: 20 }} />}
		</Flex>
	</RouterLink>
);
export default SideNavItem;
