import React from "react";
import { useState } from "react";

export default function Main11() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const url = "http://localhost:3001/employees/";
  
  const handlesubmit = () => {
    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
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
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </p>
      <p>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </p>
      <p>
        <button onClick={handlesubmit}>Submit</button>
      </p>
      <hr></hr>
    </div>
  );
}
