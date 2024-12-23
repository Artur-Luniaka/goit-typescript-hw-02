import s from "./ImageCard.module.css";

const ImageCard = ({ gallerySize, descr }) => {
  return (
    <div>
      <img className={s.img} src={gallerySize} alt={descr} loading="lazy" />
    </div>
  );
};

export default ImageCard;
