import { useCurrentUser } from '@/entities/user/useCurrentUser';
import { pagesPath } from '@/lib/$path';
import { useSignOutMutation } from '@/pages/home/document.gen';
import { Box, Button, Flex, Spacer, Stack } from '@chakra-ui/react';
import router from 'next/router';
import { Props } from 'next/script';
import React, { memo, useCallback } from 'react';

export const Header = memo<Props>(() => {
	const { currentUser, loading } = useCurrentUser();
	const onSignIn = useCallback(() => {
		router.push(pagesPath.sign_in.$url());
	}, []);

	const [logOut] = useSignOutMutation({
		onError() {},
		onCompleted() {
			router.push(pagesPath.$url());
		},
	});

	const onSignOut = useCallback(() => {
		logOut();
	}, [logOut]);

	const isLogined = !loading && !!currentUser;

	return (
		<Flex
			align="center"
			justify="space-between"
			px="6"
			py="4"
			bg="blue.500"
			color="white"
		>
			<Box fontWeight="bold">My App</Box>
			<Spacer />
			{!isLogined && (
				<Button colorScheme="green" onClick={onSignIn}>
					ログイン
				</Button>
			)}
			{isLogined && (
				<Button colorScheme="green" onClick={onSignOut}>
					ログアウト
				</Button>
			)}
		</Flex>
	);
});
