const brandRing = {
	_focus: {
		// ringColor: 'yellow.400',
		ringColor: 'black',
		// ringColor: 'brand.300',
		ring: 3
	}
};

export default {
	Button: {
		variants: {
			primary: {
				color: 'white',
				backgroundColor: 'brand.500',
				_hover: {
					backgroundColor: 'brand.400'
				},
				...brandRing, // _focus
				_active: {
					backgroundColor: 'brand.300'
				}
			},
			link: {
				backgroundColor: 'white',
				_hover: {
					textDecoration: 'underline'
				},
				_focus: {
					ring: 0
				}
			},
			text: {
				color: 'gray.600',
				backgroundColor: 'white',
				_hover: {
					color: 'gray.500'
				},
				_focus: {
					ring: 0
				}
			}
		}
	}
};
