import HeaderMenu from '@/components/headerMenu';
import Pagination from '@/components/pagination';
import { TAnime } from '@/types/animeList';
import React from 'react';
import AnimListModule from '../animeList';
import LoadingComponent from '@/components/loading';

const PopulerModule = ({
  data,
  page,
  isLoading,
}: {
  data: TAnime;
  page: number;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="my-5">
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimListModule animeList={data} />
      <Pagination dataPagination={data?.pagination} />
    </div>
  );
};

export default PopulerModule;
