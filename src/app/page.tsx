import AnimListModule from '@/modules/anime-list';
import axios from 'axios';
import Link from 'next/link';
import { Fragment } from 'react';

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = response.data.data;
  const pagination = response.data.pagination;
  // console.log(pagination);

  return (
    <main>
      <div className="p-5 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link
          href="/populer"
          className="text-md md:text-xl underline hover:text-blue-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-5 pb-5">
        {anime.map((item: any) => (
          <Fragment key={item.mal_id}>
            <AnimListModule
              id={item.mal_id}
              title={item.title}
              images={item.images.webp.image_url}
            />
          </Fragment>
        ))}
      </div>
    </main>
  );
}
