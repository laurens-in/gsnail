import { useEffect, useState } from "react";
import { messages } from "../../data/messages";
import "./style.css";

export const Loader = () => {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
