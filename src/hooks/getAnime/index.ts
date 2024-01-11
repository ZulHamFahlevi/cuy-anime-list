import { useQuery } from '@tanstack/react-query';
import { getAnimeResponse } from '../../lib/apiCall';

export const useGetAnimeResponse = (path: string, query?: string) => {
  const { data, isPending, error, isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => getAnimeResponse(path, query),
  });
  return { data, isPending, error, isLoading };
};
