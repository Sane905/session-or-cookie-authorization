import { FormValues, LoginForm } from '@/components/LoginForm/LoginForm';
import { pagesPath } from '@/lib/$path';
import { Toast, useToast } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Head } from 'next/document';
import router from 'next/router';
import { useCallback } from 'react';
import { useSignInMutation } from './document.gen';

const Page: NextPage = () => {
  const toast = useToast()

	const [signIn] = useSignInMutation({
		onError(error) {
      toast({
        title: 'ログインできませんでした。',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    },

		onCompleted(data) {
			router.push(pagesPath.home.$url());
		},
	});

	const onSignIn = useCallback(
		({ email, password }: FormValues) => {
			signIn({
				variables: {
					email,
					password,
				},
			});
		},
		[signIn],
	);

	return (
		<>
			<LoginForm onSignIn={onSignIn} />
		</>
	);
};

export default Page;
