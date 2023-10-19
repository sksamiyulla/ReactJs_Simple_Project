import React from "react";

export default function Main1() {
  const f1 = () => {
    alert("Hello World");
  };
  const f2 = (x) => {
    alert(x);
  };
  return (
    <div>
      <h1>Main 1 - onBlur</h1>
      <p>This page will.......</p>
      <button onClick={f1}>Click</button>
      <button
        onClick={() => {
          alert("Hello");
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          f2(5);
        }}
      >
        Click
      </button>

      <button
        value="10"
        onClick={(e) => {
          f2(e.target.value);
        }}
      >
        Click
      </button>
      <input
        type="text"
        onBlur={(e) => {
          f2(e.target.value);
        }}
      />
    </div>
  );
}
