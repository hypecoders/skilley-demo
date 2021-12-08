import {
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultVariant
} from '@chakra-ui/react';

import colors from './colors';
import { Box, Button, Checkbox, Input } from './components';

const theme = extendTheme(
	{
		fonts: {
			heading: `Outfit, ${base.fonts?.heading}`,
			body: `Assistant, ${base.fonts?.body}`
		},
		colors,
		components: {
			Button,
			Input,
			Checkbox,
			Box
		}
	},
	withDefaultColorScheme({
		colorScheme: 'brand',
		components: ['Checkbox']
	}),
	withDefaultVariant({
		variant: 'filled',
		components: ['Input']
	})
);

export default theme;
