import HeaderMenu from '@/components/headerMenu';
import LoadingComponent from '@/components/loading';
import Pagination from '@/components/pagination';
import { TAnime } from '@/types/animeList';
import AnimListModule from '../animeList';
import SkelotonCard from '@/components/skelotonCard';

const PopulerModule = ({
  data,
  page,
  isLoading,
}: {
  data: TAnime;
  page: number;
  isLoading: boolean;
}) => {
  return (
    <div className="my-5">
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      {isLoading ? <SkelotonCard /> : <AnimListModule animeList={data} />}
      <Pagination dataPagination={data?.pagination} />
    </div>
  );
};

export default PopulerModule;
