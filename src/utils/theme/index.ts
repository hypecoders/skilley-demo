import { extendTheme, theme as base } from '@chakra-ui/react';

import colors from './colors';

const theme = extendTheme({
	fonts: {
		heading: `Assistant ${base.fonts?.heading}`,
		body: `Outfit ${base.fonts?.body}`
	},
	colors
});

export default theme;
