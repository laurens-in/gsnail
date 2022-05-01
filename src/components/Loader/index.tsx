import { useEffect, useState } from "react";
import "./style.css";

export const Loader = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setInterval(() => setShowMessage(true), 10000);
  }, []);
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {showMessage && (
        <p>Our services are slow at the moment, please keep waiting...</p>
      )}
    </>
  );
};
