import React from 'react';
import { Button } from '../ui/button';
import { TPagination } from '@/types/anime-list';

const Pagination = ({
  page,
  setPage,
  dataPagination,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  dataPagination: TPagination;
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-5">
      <Button
        onClick={() => setPage((prev) => (prev === 1 ? 1 : prev - 1))}
        disabled={page === 1}
      >
        Prev
      </Button>
      <p className="text-xl text-white font-semibold">
        {page} of {dataPagination?.last_visible_page}
      </p>
      <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
    </div>
  );
};

export default Pagination;
