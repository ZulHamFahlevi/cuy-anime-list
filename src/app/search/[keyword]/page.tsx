import Container from '@/components/container';
import { getAnimeResponse } from '@/lib/apiCall';
import AnimListModule from '@/modules/animeList';

type TSearchParam = {
  params: {
    keyword: string;
  };
};

const SearchPage = async ({ params }: TSearchParam) => {
  const { keyword } = params;

  const searchAnime = await getAnimeResponse('anime', `q=${keyword}`);
  const decodedKeyword = decodeURI(keyword);

  return (
    <Container>
      {searchAnime.data.length > 0 ? (
        <AnimListModule
          animeList={searchAnime}
          title={`Pencarian Untuk "${decodedKeyword}"`}
        />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-white font-semibold">
            Tidak ada hasil untuk {decodedKeyword}
          </h1>
        </div>
      )}
    </Container>
  );
};

export default SearchPage;
