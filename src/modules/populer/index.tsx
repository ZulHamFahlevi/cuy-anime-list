import HeaderMenu from '@/components/header-menu';
import Pagination from '@/components/pagination';
import { TAnime } from '@/types/anime-list';
import React from 'react';
import AnimListModule from '../anime-list';

const PopulerModule = ({
  data,
  page,
  setPage,
}: {
  data: TAnime;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="p-5">
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimListModule animeList={data} />
      <Pagination
        page={page}
        setPage={setPage}
        dataPagination={data.pagination}
      />
    </div>
  );
};

export default PopulerModule;
