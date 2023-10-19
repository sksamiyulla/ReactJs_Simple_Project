import React, { useState } from 'react';

export default function MyComponent() {
  const [arr1, setArr1] = useState([
    {
      id: 2,
      name: "Sami",
      Email: "sksami@gmail.com",
      score: 0,
    }
  ]);

  // Define the handleSubmit function
  const handleSubmit = () => {
    // Do something with arr1 or arr2 if needed
    console.log(arr1);
  };

  return (
    <div>
      <div>
        {arr1.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>ID: {item.id}</p>
            <p>Email: {item.Email}</p>
            <p>Score: {item.score}</p>
            <button>
              Click
            </button>
          </div>
        ))}
        <hr />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}