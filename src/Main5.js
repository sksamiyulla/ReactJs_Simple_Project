import React, { useEffect } from "react";
import { useState } from "react";

export default function Main5() {
  const [val, setVal] = useState();
  const [val1, setVal1] = useState();
  useEffect(() => {
    alert("Hello");
  }, [val, val1]);
  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <input type="text" onChange={(e) => setVal1(e.target.value)} />
      <p>
        {val},{val1}
      </p>
    </div>
  );
}
