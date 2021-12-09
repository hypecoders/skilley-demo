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
		ghost: {
			backgroundColor: 'gray.100',
			_hover: {
				backgroundColor: 'gray.200'
			},
			_focus: {
				ring: 0
			},
			_active: {
				backgroundColor: 'gray.300'
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
		},
		success: {
			color: 'white',
			backgroundColor: 'green.500',
			_hover: {
				backgroundColor: 'green.400'
			},
			_active: {
				backgroundColor: 'green.300'
			},
			_focus: {
				ring: 0
			}
		},
		error: {
			color: 'white',
			backgroundColor: 'red.500',
			_hover: {
				backgroundColor: 'red.400'
			},
			_active: {
				backgroundColor: 'red.300'
			},
			_focus: {
				ring: 0
			}
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
