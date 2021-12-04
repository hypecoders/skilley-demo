import { ReactText } from 'react';
import { Flex, Icon, FlexProps } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

type NavItemProps = {
	icon: IconType;
	children: ReactText;
	isActive: boolean;
	path: string;
} & FlexProps;

const NavItem = ({ icon, children, isActive, path, ...rest }: NavItemProps) => (
	<RouterLink to={path} style={{ textDecoration: 'none' }}>
		<Flex
			align="center"
			p="4"
			mx="4"
			borderRadius="lg"
			role="group"
			cursor="pointer"
			color={isActive ? 'brand.500' : ''}
			fontWeight="bold"
			_hover={{
				bg: 'brand.500',
				color: 'white'
			}}
			{...rest}
		>
			{icon && (
				<Icon
					mr="4"
					fontSize="16"
					_groupHover={{
						color: 'white'
					}}
					as={icon}
				/>
			)}
			{children}
			{isActive && <FiArrowLeft style={{ marginLeft: 20 }} />}
		</Flex>
	</RouterLink>
);
export default NavItem;
