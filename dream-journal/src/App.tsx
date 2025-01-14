import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import DreamsList from "./components/DreamsList/DreamsList.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

import { Dream } from "./types/dream.ts";
import { Theme } from "./types/theme.ts";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const [dreams, setDreams] = useState<Dream[]>(() => {
    const item = localStorage.getItem("dreams");

    if (item === null) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(item);
    return dreams.map((dream) => ({ ...dream, date: new Date(dream.date) }));
  });

  const applyHandler = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <div className="app">
      <Header />
      <main>
        <Toolbar theme={theme} setTheme={setTheme} />
        <DreamsList dreams={dreams} />
      </main>
      <Footer onApply={applyHandler} />
    </div>
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
