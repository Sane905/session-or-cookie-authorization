import { useFetchCurrentUserQuery } from '@/entities/user/document.gen';
import { useCurrentUser } from '@/entities/user/useCurrentUser';
import { pagesPath } from '@/lib/$path';
import router from 'next/router';
import { ReactNode, useCallback } from 'react';

type Props = {
	children: ReactNode;
};
export const WithAuth: React.FC<Props> = ({ children }) => {
	const { currentUser, loading } = useCurrentUser();
	if (loading) return null;

	if (!currentUser) {
		if (typeof window !== 'undefined') {
			router.push(pagesPath.sign_in.$url());
		}

		return null;
	}

	return <>{children}</>;
};
