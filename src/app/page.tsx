import AnimListModule from '@/modules/anime-list';
import axios from 'axios';

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = response.data.data;
  const pagination = response.data.pagination;
  // console.log(pagination);

  return (
    <main>
      <AnimListModule
        topAnime={topAnime}
        title="Paling Populer"
        linkTitle="Lihat Semua"
        linkHref="/populer"
      />
      <AnimListModule
        topAnime={topAnime}
        title="Paling Terbaru"
        linkTitle="Ikuti Sekarang"
        linkHref="/new"
      />
    </main>
  );
}
