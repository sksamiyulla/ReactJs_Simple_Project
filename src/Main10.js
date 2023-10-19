import React from "react";
import { useState } from "react";

export default function Main10() {
  const [id, setId] = useState();
  const url = "http://localhost:3001/employees/";

  const handlesubmit = () => {
    fetch(url + id, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="Enter ID"
          onChange={(e) => setId(e.target.value)}
        ></input>
      </p>
      <p>
        <button onClick={handlesubmit}>Delete</button>
      </p>
    </div>
  );
}
