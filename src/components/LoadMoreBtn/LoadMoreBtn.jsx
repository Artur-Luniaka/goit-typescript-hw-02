import { IoMdImages } from "react-icons/io";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoad }) => {
  return (
    <div className={s.box}>
      <button className={s.button} type="button" onClick={onLoad}>
        Load more <IoMdImages />
      </button>
    </div>
  );
};

export default LoadMoreBtn;
