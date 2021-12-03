import { extendTheme, theme as base } from '@chakra-ui/react';

import colors from './colors';
import components from './components';

const theme = extendTheme({
	fonts: {
		heading: `Assistant ${base.fonts?.heading}`,
		body: `Outfit ${base.fonts?.body}`
	},
	colors,
	components
});

export default theme;
