import Container from '@/components/container';
import AnimListModule from '@/modules/anime-list';
import axios from 'axios';

export default async function HomePage() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = response.data;

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
