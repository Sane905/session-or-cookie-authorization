import { useFetchCurrentUserQuery } from '@/entities/user/document.gen';
import { useCurrentUser } from '@/entities/user/useCurrentUser';
import { pagesPath } from '@/lib/$path';
import { useToast } from '@chakra-ui/react';
import error from 'next/error';
import router from 'next/router';
import { ReactNode, useCallback } from 'react';

type Props = {
	children: ReactNode;
};
export const WithAuth: React.FC<Props> = ({ children }) => {
	const { currentUser, loading } = useCurrentUser();
	const toast = useToast();
	if (loading) return null;

	if (!currentUser) {
		if (typeof window !== 'undefined') {
			toast({
				title: 'ログインできませんでした',
			});
			router.push(pagesPath.sign_in.$url());
		}

		return null;
	}

	return <>{children}</>;
};
