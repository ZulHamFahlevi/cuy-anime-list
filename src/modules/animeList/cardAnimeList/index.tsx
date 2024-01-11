import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TAnimeList } from '@/types/animeList';
import Image from 'next/image';

const CardAnimeList = ({ animeList }: { animeList: TAnimeList[] }) => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-5 pb-5">
      {animeList?.map((item: TAnimeList) => (
        <Card key={item.mal_id} className="bg-color-light">
          <CardHeader className="overflow-hidden p-0 rounded-t-md">
            <Image
              src={item.images.webp.image_url}
              alt="gambar"
              width={350}
              height={350}
              className="object-cover w-full max-h-64"
            />
          </CardHeader>
          <CardContent className="py-2 md:py-4 pl-2 sm:pl-4">
            <CardTitle className="text-lg md:text-2xl line-clamp-1">
              {item.title}
            </CardTitle>
          </CardContent>
          <CardFooter className="pl-2 sm:pl-4">
            <Button>Lihat Detail</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardAnimeList;
