import { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);
  //isGreen : current state

  return (
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "limegreen" : "cyan", cursor: "pointer" }}
    >
      useState Example
    </h1>
  );
};

export default StateComponent;
