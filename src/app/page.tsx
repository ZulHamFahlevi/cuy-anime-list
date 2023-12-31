import AnimListModule from '@/modules/anime-list';
import axios from 'axios';
import { Fragment } from 'react';

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = response.data.data;
  const pagination = response.data.pagination;
  // console.log(pagination);

  return (
    <main className="mt-5">
      <h1>Paling Populer</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
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
