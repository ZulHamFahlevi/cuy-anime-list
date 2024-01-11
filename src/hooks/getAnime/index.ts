import { useQuery } from '@tanstack/react-query';
import { getAnimeResponse } from '../../lib/apiCall';

export const useGetAnimeResponse = (path: string, query?: string) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['getAnimeResponse', path, query],
    queryFn: () => getAnimeResponse(path, query),
  });
  return { data, error, isLoading, refetch };
};
