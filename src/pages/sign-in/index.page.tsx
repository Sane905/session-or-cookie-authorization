import { FormValues, LoginForm } from '@/components/LoginForm/LoginForm';
import { pagesPath } from '@/lib/$path';
import { NextPage } from 'next';
import { Head } from 'next/document';
import router from 'next/router';
import { useCallback } from 'react';
import { useSignInMutation } from './document.gen';

const Page: NextPage = () => {
	const [signIn] = useSignInMutation({
		onError(error) {},
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
