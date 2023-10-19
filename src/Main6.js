import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Main6() {
  const itemArr = ["Rice", "Wheat", "Dal", "Egg"];
  return (
    <>
      <ol>
        {itemArr.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
      <hr></hr>
      <div className='row'>
        {itemArr.map((item) => (
          <div className='col-lg-4'>{item}</div>
        ))}
      </div>
    </>
  );
}
