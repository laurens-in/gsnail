import { useEffect, useState } from "react";
import logo from "./logo.svg";
import snail from "./assets/snail_creep.gif";
import { features } from "./data/features";
import "./App.css";
import { Loader } from "./components/Loader";
import { messages } from "./data/messages";
import client from "./assets/client.png";

function App() {
  const [progress, setProgress] = useState<number>(0);

  const [count, setCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setCurrentMessage(messages[count]?.message);
      if (!messages[count].wait) setCount(count + 1);
    }, messages[count - 1]?.duration ?? 8000);
  }, [count]);

  useEffect(() => {
    // progress count relationsship
    if (count === 3) setProgress(2);
    if (count === 4) setProgress(3);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={snail}></img>
        {progress <= 2 && (
          <h1 className={progress === 2 ? " disappear" : ""}>
            don't use <s>gmail</s>, be a <b>gsnail</b>!
          </h1>
        )}
        {progress === 0 && (
          <button onClick={() => setProgress(1)}>Sign up!</button>
        )}
        {progress > 0 && (
          <>
            <Loader />
            <div id="message">
              <p>{currentMessage}</p>
            </div>
          </>
        )}
      </header>
      {progress <= 2 && (
        <div className={"info" + (progress === 2 ? " disappear" : "")}>
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
          <div className="client">
            <h1>Meet our cross-plattform client!</h1>
            <img src={client}></img>
            <p>
              It works on every plattform you could dream of! Windows XP,
              Windows Vista, Windows 10 you name it! Collaborate with your whole
              team, even on the go, with our new Windows Phone OS mobile client!
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>I'm hooked, where do I sign up?</h1>
            <p>
              We love to hear it! Sadly the sign-up button is at the top of the
              page, so you will have to scroll back up.
            </p>
          </div>
        </div>
      )}
      {progress === 3 && <></>}
      <footer>
        <p>gsnail™ is a trademark owned by Gslug Inc.</p>
      </footer>
    </div>
  );
}

export default App;
