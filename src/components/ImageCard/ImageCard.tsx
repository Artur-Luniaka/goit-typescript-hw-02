import s from "./ImageCard.module.css";
import { CardImageProps } from "./ImageCard.types";

const ImageCard: React.FC<CardImageProps> = ({ gallerySize, descr }) => {
  return (
    <div>
      <img className={s.img} src={gallerySize} alt={descr} loading="lazy" />
    </div>
  );
};

export default ImageCard;
