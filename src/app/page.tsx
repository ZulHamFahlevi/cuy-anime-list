import Container from '@/components/container';
import { getAnimeResponse } from '@/hooks/apiCall';
import AnimListModule from '@/modules/animeList';

export default async function HomePage() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8');

  return (
    <Container>
      <AnimListModule
        animeList={topAnime}
        title="Paling Populer"
        linkTitle="Lihat Semua"
        linkHref="/populer"
      />
      <AnimListModule
        animeList={topAnime}
        title="Paling Terbaru"
        linkTitle="Ikuti Sekarang"
        linkHref="/new"
      />
    </Container>
  );
}
