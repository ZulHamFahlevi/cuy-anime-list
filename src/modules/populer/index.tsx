import HeaderMenu from '@/components/header-menu';
import Pagination from '@/components/pagination';
import { TAnime } from '@/types/anime-list';
import React from 'react';
import AnimListModule from '../anime-list';

const PopulerModule = ({ data, page }: { data: TAnime; page: number }) => {
  return (
    <div className="my-5">
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimListModule animeList={data} />
      <Pagination dataPagination={data.pagination} />
    </div>
  );
};

export default PopulerModule;
