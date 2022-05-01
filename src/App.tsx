import { useEffect, useState } from "react";
import logo from "./logo.svg";
import snail from "./assets/snail_creep.gif";
import { features } from "./data/features";
import "./App.css";
import { Loader } from "./components/Loader";
import { messages } from "./data/messages";

function App() {
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCurrentMessage(messages[count]?.message);
      if (!messages[count].wait) setCount(count + 1);
    }, messages[count - 1]?.duration ?? 8000);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={snail}></img>
        {showInfo && (
          <h1 className={count >= 3 ? " disappear" : ""}>
            don't use <s>gmail</s>, be a <b>gsnail</b>!
          </h1>
        )}
        {!loading && <button onClick={() => setLoading(true)}>Sign up!</button>}
        {loading && (
          <>
            <Loader />
            <div id="message">
              <p>{currentMessage}</p>
            </div>
          </>
        )}
      </header>
      {showInfo && (
        <div
          className={"info" + (count >= 3 ? " disappear" : "")}
          onTransitionEnd={() => setShowInfo(false)}
        >
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
        </div>
      )}
      <footer>
        <p>gsnail™ is a trademark owned by Gslug Inc.</p>
      </footer>
    </div>
  );
}

export default App;
