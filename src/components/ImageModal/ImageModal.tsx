import s from "./ImageModal.module.css";
import { CgCloseR } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";
Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  selectedImage,
  style,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <button className={s.button} onClick={onRequestClose}>
        <CgCloseR className={s.icon} />
      </button>
      {selectedImage ? (
        <>
          <img
            className={s.img}
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description || ""}
            loading="lazy"
          />
          <span className={s.likes}>
            <BiLike /> {selectedImage.likes}
          </span>
          <span className={s.author}>Author: {selectedImage.user.name}</span>
        </>
      ) : (
        ""
      )}
    </Modal>
  );
};

export default ImageModal;
