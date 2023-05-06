import { useFetchCurrentUserQuery } from './document.gen';

export const useCurrentUser = () => {
	const { data, loading, refetch } = useFetchCurrentUserQuery();

	return {
		currentUser: data?.user,
		loading,
		refetch,
	};
};
