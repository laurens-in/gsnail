import { useState } from "react";
import logo from "./logo.svg";
import snail from "./assets/snail.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={snail}></img>
        <p>this site is under construction...</p>
      </header>
    </div>
  );
}

export default App;
