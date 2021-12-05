import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';

type Props = {
	isOpen: boolean;
	onToggle: () => void;
};

const MenuToggle = ({ isOpen, onToggle }: Props) => (
	<Box display={{ base: 'block', md: 'none' }}>
		<IconButton
			onClick={onToggle}
			variant="ghost"
			aria-label="Toggle Navigation"
			icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
		/>
	</Box>
);

export default MenuToggle;
