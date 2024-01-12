import axios from 'axios';

export const getAnimeResponse = async (path: string, query?: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}?${query}`
  );
  const data = response.data;
  return data;
};
