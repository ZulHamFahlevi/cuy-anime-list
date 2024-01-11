import { TAnime } from '@/types/animeList';
import Link from 'next/link';
import CardAnimeList from './cardAnimeList';

const AnimListModule = ({
  animeList,
  title,
  linkTitle,
  linkHref,
}: {
  animeList: TAnime;
  title?: string;
  linkTitle?: string;
  linkHref?: string;
}) => {
  return (
    <>
      {title ? (
        <div className="p-5 flex flex-wrap justify-between items-center">
          <h1 className="text-2xl text-color-light font-bold">{title}</h1>
          {linkTitle && linkHref ? (
            <Link
              href={linkHref}
              className="text-md md:text-xl text-color-light underline hover:text-color-primary/80 transition-all"
            >
              {linkTitle}
            </Link>
          ) : null}
        </div>
      ) : null}
      <CardAnimeList animeList={animeList?.data} />
    </>
  );
};

export default AnimListModule;
