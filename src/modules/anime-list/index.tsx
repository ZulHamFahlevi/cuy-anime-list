import { TAnimeList } from '@/types/anime-list';
import Link from 'next/link';
import CardAnimeList from './card-anime-list';

const AnimListModule = ({
  animeList,
  title,
  linkTitle,
  linkHref,
}: {
  animeList: TAnimeList[];
  title: string;
  linkTitle?: string;
  linkHref?: string;
}) => {
  return (
    <>
      <div className="p-5 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {linkTitle && linkHref ? (
          <Link
            href={linkHref}
            className="text-md md:text-xl underline hover:text-blue-500 transition-all"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
      <CardAnimeList animeList={animeList} />
    </>
  );
};

export default AnimListModule;
