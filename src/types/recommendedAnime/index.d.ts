export interface TRecommendedAnime {
  data: RecommendedAnime[];
  pagination: Pagination;
}

export interface RecommendedAnime {
  mal_id: string;
  entry: Entry[];
  content: string;
  user: User;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface User {
  url: string;
  username: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}
