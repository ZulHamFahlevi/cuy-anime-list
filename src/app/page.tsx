import Container from '@/components/container';
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from '@/lib/apiCall';
import AnimListModule from '@/modules/animeList';

export default async function HomePage() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8');
  let recommendedAnime = await getNestedAnimeResponse(
    'recommendations/anime',
    'entry'
  );

  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <Container>
      <AnimListModule
        animeList={topAnime}
        title="Paling Populer"
        linkTitle="Lihat Semua"
        linkHref="/populer"
      />
      <AnimListModule
        animeList={recommendedAnime}
        title="Rekomendasi"
        linkTitle="Ikuti Sekarang"
        linkHref="/new"
      />
    </Container>
  );
}
