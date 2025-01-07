import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

import styles from "./SearchBox.module.css";

function SearchBox() {
  return (
    <div className={styles["search-box"]}>
      <input type="text" placeholder="Search note..." />
      <MingcuteSearchLine className="icon" />
    </div>
  );
}

export default SearchBox;
