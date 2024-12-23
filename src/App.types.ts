export interface ImageUrl {
  small: string;
  regular: string;
}

export interface ImagesProps {
  id: string;
  alt_description: string;
  urls: ImageUrl;
  likes: number;
  user: { name: string };
}
