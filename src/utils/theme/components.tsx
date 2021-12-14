import { BRAND_SECONDARY_COLOR } from '../../common/constants';

export const Button = {
	variants: {
		primary: {
			color: 'white',
			bg: 'brand.500',
			_hover: { bg: 'brand.400' },
			_focus: { ringColor: BRAND_SECONDARY_COLOR, ring: 2 },
			_active: { bg: 'brand.300' }
		},
		link: {
			color: 'gray.700',
			bg: 'none',
			_hover: { textDecoration: 'underline' },
			_focus: { ring: 0 }
		},
		ghost: {
			bg: 'gray.100',
			_hover: { bg: 'gray.200' },
			_focus: { ring: 0 },
			_active: { bg: 'gray.300' }
		},
		success: {
			color: 'white',
			bg: 'green.500',
			_hover: { bg: 'green.400' },
			_focus: { ring: 0 },
			_active: { bg: 'green.300' }
		},
		error: {
			color: 'white',
			bg: 'red.500',
			_hover: { bg: 'red.400' },
			_focus: { ring: 0 },
			_active: { bg: 'red.300' }
		},
		skill: {
			maxW: 'sm',
			color: 'gray.600',
			borderColor: 'brand.500',
			borderWidth: 1,
			p: 2,
			px: 4,
			m: 1,
			borderRadius: '25px',
			_focus: {
				ring: 0
			}
		},
		checkbox: {
			_hover: { color: 'gray.700' },
			_focus: { ring: 0 }
		},
		blank: {
			bg: 'none',
			_focus: { ring: 0 }
		}
	}
};

export const Radio = {
	baseStyle: {
		control: {
			_focus: { ring: 0 },
			_checked: { bg: 'brand.500', borderColor: 'brand.500' }
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

export const Box = {
	variants: {
		card: {
			borderRadius: 5
		}
	}
};

export const IconButton = {
	variants: {
		onlyIcon: {
			bg: 'white',
			_hover: { bg: 'white' },
			_focus: {
				borderColor: 'white'
			}
		}
	}
};

export const CloseButton = {
	variants: {
		ghost: {
			_focus: { ring: 0 }
		}
	}
};

export const Tabs = {
	variants: {
		pills: {
			tab: {
				borderRadius: 'full',
				bg: 'gray.50',
				fontWeight: 500,
				mr: 3,
				_hover: { bg: 'gray.100' },
				_focus: { ring: 0 },
				_active: { bg: 'gray.200' },
				_selected: {
					bg: 'gray.200'
				}
			}
		}
	}
};
