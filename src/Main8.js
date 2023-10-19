import React, { useState, useEffect } from "react";

export default function Main8() {
  const url = "http://localhost:3001/employees";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ol>
      {data.map((item) => (
        <li key={item.id}>
          {item.name} - {item.email} ({item.id})
        </li>
      ))}
    </ol>
  );
}