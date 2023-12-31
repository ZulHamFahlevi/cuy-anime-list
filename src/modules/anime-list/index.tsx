import { TTopAnimeList } from '@/types/top-anime-list';
import Link from 'next/link';
import CardAnimeList from './card-anime-list';

const AnimListModule = ({
  topAnime,
  title,
  linkTitle,
  linkHref,
}: {
  topAnime: TTopAnimeList[];
  title: string;
  linkTitle: string;
  linkHref: string;
}) => {
  return (
    <>
      <div className="p-5 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link
          href={linkHref}
          className="text-md md:text-xl underline hover:text-blue-500 transition-all"
        >
          {linkTitle}
        </Link>
      </div>
      <CardAnimeList topAnime={topAnime} />
    </>
  );
};

export default AnimListModule;
