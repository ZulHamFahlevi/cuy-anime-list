import { usePagination } from '@/store/pagination';
import { TPagination } from '@/types/animeList';
import { Button } from '../ui/button';

const Pagination = ({ dataPagination }: { dataPagination: TPagination }) => {
  const { page, previousPage, nextPage } = usePagination();

  const ScrollToTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-5">
      <Button
        type="button"
        onClick={() => {
          previousPage();
          ScrollToTop();
        }}
        disabled={page === 1}
      >
        Prev
      </Button>
      <p className="text-xl text-color-light font-semibold">
        {page} of {dataPagination?.last_visible_page}
      </p>
      <Button
        type="button"
        onClick={() => {
          nextPage();
          ScrollToTop();
        }}
        disabled={page === dataPagination?.last_visible_page}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
