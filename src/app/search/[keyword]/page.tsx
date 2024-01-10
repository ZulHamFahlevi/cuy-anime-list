import Container from '@/components/container';
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
  const decodedKeyword = decodeURIComponent(keyword.replace(/\+/g, ' '));

  // Check if title exists in the animeList
  const titleExists = searchAnime.some((anime: any) => anime.title);

  return (
    <Container>
      {titleExists ? (
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
