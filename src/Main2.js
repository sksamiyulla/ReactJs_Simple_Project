import React from "react";
import { useState } from "react";

export default function Main2() {
  const [name, setName] = useState();
  return (
    <div>
      <p> {name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
}
