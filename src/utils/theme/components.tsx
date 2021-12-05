/* ----- CONSTANTS ----- */

const brandRing = {
	_focus: {
		// ringColor: 'yellow.400',
		ringColor: 'black',
		// ringColor: 'brand.300',
		ring: 3
	}
};

/* ----- EXPORTS ----- */

export const Button = {
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
			color: 'gray.700',
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
};

export const Input = {
	variants: {
		filled: {
			field: {
				_focus: {
					borderColor: 'brand.500'
				}
			}
		}
	}
};

export const Checkbox = {
	baseStyle: {
		control: {
			_focus: {
				ring: 2,
				ringColor: 'black'
			}
		}
	}
};
