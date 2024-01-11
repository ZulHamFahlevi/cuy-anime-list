import Container from '@/components/container';
import VideoPlayer from '@/components/videoPlayer';
import { getAnimeResponse } from '@/lib/apiCall';
import Image from 'next/image';

type TParams = {
  params: {
    id: string;
  };
};

const DetailAnimePage = async ({ params }: TParams) => {
  const { id } = params;

  const detailAnime = await getAnimeResponse(`anime/${id}`);

  const info = [
    {
      label: 'Peringkat',
      value: detailAnime.data.rank,
    },
    {
      label: 'Skor',
      value: detailAnime.data.score,
    },
    {
      label: 'Episode',
      value: detailAnime.data.episodes,
    },
    {
      label: 'Anggota',
      value: detailAnime.data.members,
    },
  ];

  return (
    <Container>
      <div className="flex justify-center sm:justify-start items-center p-5">
        <h1 className="text-lg md:text-2xl font-semibold text-color-light">
          {detailAnime.data.title} - {detailAnime.data.year}
        </h1>
      </div>
      <div className="flex gap-4 justify-start items-center px-5 pb-5 overflow-x-auto">
        {info.map((item, index) => (
          <section
            key={index}
            className="w-36 py-2 px-3 flex flex-col justify-center items-center border border-color-light text-color-light font-semibold rounded-md"
          >
            <h2>{item.label}</h2>
            <p>{item.value}</p>
          </section>
        ))}
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center sm:items-start gap-4 px-5">
        <Image
          src={detailAnime.data.images.webp.image_url}
          alt={detailAnime.data.title}
          width={200}
          height={300}
          className="w-full min-h-[300px] rounded-lg object-cover"
        />
        <p className="text-color-light text-justify">
          {detailAnime.data.synopsis}
        </p>
      </div>
      <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
    </Container>
  );
};

export default DetailAnimePage;
