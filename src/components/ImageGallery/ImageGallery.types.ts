import { ImagesProps } from "../../App.types";

export interface CardsGalleryProps {
  cards: ImagesProps[];
  openModal: (id: string) => void;
}
