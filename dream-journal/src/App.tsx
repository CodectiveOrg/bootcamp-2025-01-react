import { useEffect, useMemo, useState } from "react";

import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import DreamsList from "./components/DreamsList/DreamsList.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

import ThemeProvider from "./providers/ThemeProvider.tsx";

import { Dream } from "./types/dream.ts";
import { Filters } from "./types/filters.ts";

import { doesInclude } from "./utils/string-utils.ts";

function App() {
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const item = localStorage.getItem("dreams");

    if (item === null) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(item);
    return dreams.map((dream) => ({ ...dream, date: new Date(dream.date) }));
  });

  const [filters, setFilters] = useState<Filters>({});

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream, index) => {
      if (index === 0) {
        console.log("filtering");
      }

      if (filters.query && !doesInclude(dream.title, filters.query)) {
        return false;
      }

      if (filters.vibe && dream.vibe !== filters.vibe) {
        return false;
      }

      return true;
    });
  }, [dreams, filters]);

  const applyHandler = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
  };

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Toolbar filters={filters} setFilters={setFilters} />
          <DreamsList dreams={filteredDreams} />
        </main>
        <Footer onApply={applyHandler} />
      </div>
    </ThemeProvider>
  );
}

export default App;

/*
  Component:
  - is a function
  - its name has to be PascalCase
  - returns ReactNode
  - gets props
 */
