import React, { useState } from "react";

export default function Main9() {
  const [name, setName] = useState(""); // Provide an initial value for name
  const [email, setEmail] = useState(""); // Provide an initial value for email
  const url = "http://localhost:3001/employees";

  const handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Handle success here
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      // Handle error here
    });
  };

  return (
    <div>
      <p>
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
      </p>
      <p>
        <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
    </div>
  );
}