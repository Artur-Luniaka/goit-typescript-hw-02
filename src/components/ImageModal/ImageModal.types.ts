import { ImagesProps } from "../../App.types";

export interface ImageModalProps {
  style: object;
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: ImagesProps | null;
  shouldCloseOnEsc: boolean;
  shouldCloseOnOverlayClick: boolean;
}
