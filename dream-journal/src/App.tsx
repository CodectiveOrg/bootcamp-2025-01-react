import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("App is called");

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
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
