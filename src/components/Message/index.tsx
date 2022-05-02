import { useEffect, useState } from "react";
import { messages } from "../../data/messages";

interface MessageProps {
  count: number;
  setCount: (count: number) => void;
  setProgress: (prog: number) => void;
}

export const Message = (props: MessageProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");

  // ugly as hell but works for now :)
  useEffect(() => {
    // update progress immediatly (wait events, or instant fade out)
    if (props.count === 2) props.setProgress(2);
    if (props.count === 3) props.setProgress(3);
    if (props.count === 5) props.setProgress(5);
    if (props.count === 6) props.setProgress(6);
    setCurrentMessage(messages[props.count]?.message);
    setTimeout(() => {
      if (!messages[props.count]?.wait && !(props.count > messages.length))
        props.setCount(props.count + 1);
      if (props.count === 4) props.setProgress(4);
    }, messages[props.count]?.duration);
  }, [props.count]);

  return <>{currentMessage}</>;
};
