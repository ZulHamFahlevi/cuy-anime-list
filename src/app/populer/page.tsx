'use client';

import Container from '@/components/container';
import PopulerModule from '@/modules/populer';
import { TAnime } from '@/types/anime-list';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const PopulerPage = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<TAnime>({} as TAnime);

  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    setData(response.data);
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <PopulerModule data={data} page={page} setPage={setPage} />
    </Container>
  );
};

export default PopulerPage;
