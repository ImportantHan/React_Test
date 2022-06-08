import React, { useState } from "react";

function Couter() {
  const [number, setNumber] = useState(0);

  const onIncreast = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncreast}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Couter;
