import s from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ sendQuery }) => {
  return (
    <>
      <header>
        <form className={s.form} onSubmit={sendQuery}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
            name="searchInput"
          />
          <button className={s.button} type="submit">
            Search <MdOutlineImageSearch />
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
