import '@/styles/globals.css';
import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	const link = createHttpLink({
		uri: 'http://localhost:3001/graphql',
		credentials: 'include',
		fetchOptions: { credentials: 'include' },
	});

	const client = new ApolloClient({
		ssrMode: typeof window === 'undefined',
		cache: new InMemoryCache(),
		link,
	});

	return (
		<ApolloProvider client={client}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
	);
};

export default App;
