import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<ChakraProvider theme={theme}>
			<Story />
		</ChakraProvider>
	),
];
