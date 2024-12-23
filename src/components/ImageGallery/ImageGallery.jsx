import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ cards = [], openModal }) => {
  return (
    <>
      <ul className={s.list}>
        {cards.map((card) => (
          <li key={card.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal(card.id);
              }}
            >
              <ImageCard
                gallerySize={card.urls.small}
                descr={card.alt_description}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
