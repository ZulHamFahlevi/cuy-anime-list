'use client';

import Container from '@/components/container';
import { useGetAnimeResponse } from '@/hooks/getAnime';
import PopulerModule from '@/modules/populer';
import { usePagination } from '@/store/pagination';

const PopulerPage = () => {
  const { page } = usePagination();
  const { data, isLoading } = useGetAnimeResponse('top/anime', `page=${page}`);

  return (
    <Container>
      <PopulerModule data={data} page={page} isLoading={isLoading} />
    </Container>
  );
};

export default PopulerPage;
