import axios from 'axios';
import { Slice } from 'lucide-react';

export const getAnimeResponse = async (path: string, query?: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}?${query}`
  );
  const data = response.data;
  return data;
};

export const getNestedAnimeResponse = async (
  path: string,
  obejcProperty: string
) => {
  const response = await getAnimeResponse(path);
  return response.data.flatMap((item: any) => item[obejcProperty]);
};

export const reproduce = (data: any[], gap: number) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const second = first + gap;

  const response = {
    data: data.slice(first, second),
  };

  return response;
};
