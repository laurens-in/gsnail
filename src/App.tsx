import { useEffect, useState } from "react";
import logo from "./logo.svg";
import snail from "./assets/snail_creep.gif";
import { features } from "./data/features";
import "./App.css";
import { Loader } from "./components/Loader";
import { messages } from "./data/messages";
import client from "./assets/client.png";
import rorschach from "./assets/rorschach.png";
import { Message } from "./components/Message";

function App() {
  const [progress, setProgress] = useState<number>(0);

  const [count, setCount] = useState(0);

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
              <Message
                count={count}
                setCount={setCount}
                setProgress={setProgress}
              />
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
      {progress === 4 && (
        <div className="rorschach">
          <img src={rorschach}></img>
          <div className="rorschachButtons">
            <button
              onClick={() => setCount(count + 1)}
              style={{ backgroundColor: "red" }}
            >
              Snail
            </button>
            <button
              onClick={() => setCount(count + 1)}
              style={{ backgroundColor: "green" }}
            >
              Slug
            </button>
          </div>
        </div>
      )}
      <footer>
        <p>gsnail™ is a trademark owned by Gslug Inc.</p>
      </footer>
    </div>
  );
}

export default App;
