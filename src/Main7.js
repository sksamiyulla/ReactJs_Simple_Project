import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Main7() {
  const itemsArray = [
    {
      id: 1,
      name: "Product 1",
      price: 230,
    },
    {
      id: 2,
      name: "Product 2",
      price: 230,
    },
    {
      id: 3,
      name: "Product 3",
      price: 230,
    },
  ];

  return (
    <div class="row">
      {itemsArray.map((item) => (
        <div className="col-lg-4">{item.name}</div>
      ))}
    </div>
  );
}
