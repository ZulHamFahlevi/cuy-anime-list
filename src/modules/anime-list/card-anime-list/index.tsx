import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TTopAnimeList } from '@/types/top-anime-list';
import Image from 'next/image';

const CardAnimeList = ({ animeList }: { animeList: TTopAnimeList[] }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-5 pb-5">
      {animeList.map((item: TTopAnimeList) => (
        <Card key={item.mal_id}>
          <CardHeader className="overflow-hidden p-0 rounded-t-md">
            <Image
              src={item.images.webp.image_url}
              alt="gambar"
              width={350}
              height={350}
              className="object-cover w-full max-h-64"
            />
          </CardHeader>
          <CardContent className="pt-4 pl-2">
            <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardAnimeList;
