import { useState } from "react";
import logo from "./logo.svg";
import snail from "./assets/snail_creep.gif";
import { features } from "./data/features";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={snail}></img>
        <h1>
          don't use <s>gmail</s>, be a <b>gsnail</b>!
        </h1>
        <button>Sign up!</button>
      </header>
      {features.map((feature, index) => (
        <div
          className={"feature" + (index % 2 === 0 ? "" : " odd")}
          key={index}
        >
          <div className="featureText">
            <h1>{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
          <img className="featureImg" src={feature.img}></img>
        </div>
      ))}
      <footer>
        <p>gsnail™ is a trademark owned by Gslug Inc.</p>
      </footer>
    </div>
  );
}

export default App;
