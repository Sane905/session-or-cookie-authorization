import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Stack,
} from '@chakra-ui/react';
import { on } from 'events';
import React, { memo } from 'react';
import { get, useForm } from 'react-hook-form';

type Props = {
	onSignIn: (params: FormValues) => void;
};

export type FormValues = {
	email: string;
	password: string;
};

export const LoginForm = memo<Props>(({ onSignIn }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		getValues,
	} = useForm<FormValues>();

	const onSubmit = () => {
		const { email, password } = getValues();
		onSignIn({ email, password });
	};

	return (
		<Box maxW="md" mx="auto" mt="8">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing="6">
					<FormControl>
						<FormLabel htmlFor="email">メールアドレス</FormLabel>
						<Input
							type="email"
							id="email"
							{...register('email', { required: true })}
						/>
						<FormErrorMessage>
							{errors.email && 'Email is required'}
						</FormErrorMessage>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="password">パスワード</FormLabel>
						<Input
							type="password"
							id="password"
							{...register('password', { required: true })}
						/>
						<FormErrorMessage>
							{errors.password && 'Password is required'}
						</FormErrorMessage>
					</FormControl>
					<Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
						ログイン
					</Button>
				</Stack>
			</form>
		</Box>
	);
});
