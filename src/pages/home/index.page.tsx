import { NextPage } from 'next';
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Stack,
	Text,
} from '@chakra-ui/react';
import { WithAuth } from '@/components/layout/WithAuth';
import { useCurrentUser } from '@/entities/user/useCurrentUser';
import { Header } from '@/components/Header/Header';

const Page: NextPage = () => {
	const { currentUser } = useCurrentUser();

	return (
		<WithAuth>
			<Header />
			<Text>{currentUser?.email}</Text>
		</WithAuth>
	);
};

export default Page;
