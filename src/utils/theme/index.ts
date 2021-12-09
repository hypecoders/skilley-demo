import {
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultVariant
} from '@chakra-ui/react';

import colors from './colors';
import {
	Box,
	Button,
	Checkbox,
	CloseButton,
	Input,
	Radio,
	Tabs
} from './components';

const theme = extendTheme(
	{
		fonts: {
			heading: `Raleway, ${base.fonts?.heading}`,
			body: `Source Sans 3, ${base.fonts?.body}`
		},
		colors,
		components: {
			Button,
			Input,
			Checkbox,
			Box,
			Tabs,
			CloseButton,
			Radio
		}
	},
	withDefaultColorScheme({
		colorScheme: 'brand',
		components: ['Checkbox']
	}),
	withDefaultVariant({
		variant: 'filled',
		components: ['Input']
	}),
	withDefaultVariant({
		variant: 'ghost',
		components: ['CloseButton']
	})
);

export default theme;
