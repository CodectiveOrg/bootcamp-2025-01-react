import Button from "../Button/Button.tsx";
import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter.tsx";
import SearchBox from "../SearchBox/SearchBox.tsx";

import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine.tsx";

function Toolbar() {
  return (
    <div className="toolbar">
      <SearchBox />
      <ItemTypeFilter />
      <Button className="theme">
        <MingcuteMoonStarsLine />
      </Button>
    </div>
  );
}

export default Toolbar;
