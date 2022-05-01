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
    setTimeout(
      () => {
        setCurrentMessage(messages[props.count]?.message);
        if (!messages[props.count]?.wait) props.setCount(props.count + 1);
        if (props.count === 2) props.setProgress(2);
        if (props.count === 3) props.setProgress(3);
        if (props.count === 4) props.setProgress(4);
        if (props.count === 5) props.setProgress(5);
      },
      !messages[props.count]?.wait
        ? messages[props.count - 1]?.duration ?? 8000
        : 0
    );
  }, [props.count]);

  return <>{currentMessage}</>;
};
