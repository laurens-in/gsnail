import { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { messages } from "../../data/messages";

interface MessageProps {
  count: number;
  setCount: (count: number) => void;
  setEnd: (end: EndVariant) => void;
  setBad: () => void;
  reset: () => void;
}

export const Message = (props: MessageProps) => {
  const [message, setMessage] = useState<Part>();
  const [localCount, setLocalCount] = useState<number>(0);
  const next = (number?: number) => {
    props.setCount(props.count + (number ?? 1));
  };

  useEffect(() => {
    setMessage(() => messages[props.count] ?? undefined);
  }, [props.count]);

  useEffect(() => {
    message?.end?.(props.setEnd);
    message?.bad?.(props.setBad);
    message?.timeOut?.(next);
    setLocalCount(props.count);
  }, [message]);
  return (
    <>
      <div>{message?.message}</div>
      <SwitchTransition mode="out-in">
        <CSSTransition key={props.count} timeout={1000} classNames="fade">
          <>{message?.prompt?.(next, props.reset, props.setEnd)}</>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};
