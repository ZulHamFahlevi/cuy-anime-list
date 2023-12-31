import AnimListModule from '@/modules/anime-list';
import axios from 'axios';

type TSearchParam = {
  params: {
    keyword: string;
  };
};

const SearchPage = async ({ params }: TSearchParam) => {
  const { keyword } = params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = response.data.data;

  return (
    <main>
      <AnimListModule
        animeList={searchAnime}
        title={`Pencarian Untuk "${keyword}"`}
      />
    </main>
  );
};

export default SearchPage;
