import React, { useEffect, useId, useState } from "react";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import logo from "./logo.svg";
import snail from "./assets/snail_creep.gif";
import slug from "./assets/become_slug.gif";
import { features } from "./data/features";
import "./App.css";
import { Loader } from "./components/Loader";
import { messages } from "./data/messages";
import client from "./assets/client.png";
import rorschach from "./assets/rorschach.png";
import { Message } from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const [hide, setHide] = useState(false);
  const [bad, setBad] = useState(false);
  const [hadEnd, setHadEnd] = useState<EndVariant | null>(null);

  const remember = (end: EndVariant) => {
    localStorage.setItem("ending", end);
    setHadEnd(end);
  };

  const reset = () => {
    localStorage.removeItem("ending");
    setHadEnd(null);
    setPlay(false);
    setHide(false);
  };

  useEffect(() => {
    const end = localStorage.getItem("ending");
    if (end) {
      setHadEnd(localStorage.getItem("ending") as EndVariant | null);
    }
  }, []);

  useEffect(() => {
    if (hadEnd === "boring") setCount(12);
    if (hadEnd === "final") setCount(13);
  }, [hadEnd]);

  useEffect(() => {
    if (count === 2) setHide(true);
  }, [count]);
  useEffect(() => {
    if (!play && !hadEnd) setCount(0);
  }, [play]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={!bad ? snail : slug}></img>
        <CSSTransition
          in={!hide}
          timeout={2500}
          classNames="hide"
          unmountOnExit
        >
          <h1>
            don't use <s>gmail</s>, be a <b>gsnail</b>!
          </h1>
        </CSSTransition>
        {!play ? (
          <button
            onClick={() => {
              setPlay(true);
              if (count > 2) setHide(true);
            }}
          >
            {hadEnd ? "????" : "Sign up!"}
          </button>
        ) : (
          <Loader />
        )}
      </header>

      {play && (
        <>
          <div id="message">
            <Message
              count={count}
              setCount={setCount}
              setEnd={(end: EndVariant) => {
                setPlay(false);
                setHide(false);
                setBad(false);
                remember(end);
                if (end === "boring") setCount(12);
                if (end === "final") setCount(13);
              }}
              setBad={() => setBad(true)}
              reset={() => reset()}
            />
          </div>
        </>
      )}
      <CSSTransition in={!hide} timeout={2500} classNames="hide" unmountOnExit>
        <div className="info">
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
      </CSSTransition>

      <footer>
        <p>gsnail™ is a trademark owned by Gslug Inc.</p>
      </footer>
    </div>
  );
}

export default App;
