import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { Dream } from "../types/dream.ts";

type DreamsContextValue = {
  dreams: Dream[];
  createDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
  removeDream: (dreamId: string) => void;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  createDream: () => {},
  editDream: () => {},
  removeDream: () => {},
});

type Props = PropsWithChildren;

function DreamsProvider({ children }: Props) {
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const item = localStorage.getItem("dreams");

    if (item === null) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(item);
    return dreams.map((dream) => ({ ...dream, date: new Date(dream.date) }));
  });

  const createDream = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
  };

  const editDream = (dream: Dream): void => {
    setDreams((old) =>
      old.map((x) => {
        if (x.id === dream.id) {
          return dream;
        }

        return x;
      }),
    );
  };

  const removeDream = (dreamId: string): void => {
    setDreams((old) => old.filter((x) => x.id !== dreamId));
  };

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <DreamsContext.Provider
      value={{ dreams, createDream, editDream, removeDream }}
    >
      {children}
    </DreamsContext.Provider>
  );
}

export default DreamsProvider;
