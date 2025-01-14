import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Filters } from "../../types/filters.ts";
import { Vibe } from "../../types/vibe.ts";

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

function VibeFilter({ filters, setFilters }: Props) {
  const changeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    const vibe = e.target.value;

    setFilters((old) => {
      if (vibe === "all") {
        return { ...old, vibe: undefined };
      }

      return { ...old, vibe: vibe as Vibe };
    });
  };

  return (
    <select value={filters.vibe} onChange={changeHandler}>
      <option value="all">All</option>
      <option value="good">Good</option>
      <option value="bad">Bad</option>
    </select>
  );
}

export default VibeFilter;
