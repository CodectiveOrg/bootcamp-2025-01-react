import MingcuteSearchLine from "./icons/MingcuteSearchLine.tsx";
import MingcuteMoonStarsLine from "./icons/MingcuteMoonStarsLine.tsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Dream Journal</h1>
      </header>
      <main>
        <div className="toolbar">
          <div className="search-box">
            <input type="text" />
            <MingcuteSearchLine className="icon" />
          </div>
          <select>
            <option value="">All</option>
            <option value="">Filter 1</option>
            <option value="">Filter 2</option>
          </select>
          <button className="theme">
            <MingcuteMoonStarsLine />
          </button>
        </div>
        <ul className="items"></ul>
      </main>
      <footer>
        <button className="add">+</button>
      </footer>
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
