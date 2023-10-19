import React from "react";
import { useState } from "react";

export default function () {
  const [num, setNum] = useState();
  const [result, setResult] = useState();
  const handlesubmit = () => {
    setResult(num * num);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setNum(e.target.value)} />
      <button onClick={handlesubmit}>Submit</button>
      <p>{result}</p>
    </div>
  );
}
