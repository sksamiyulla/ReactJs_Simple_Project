import { useEffect, useState } from "react";
export default function Main12() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    console.log("Increment Function called");
    setCounter(parseInt(counter) + 1);
  };

  useEffect(() => {
    console.log("Component: Mounting");

    return () => {
      console.log("Component: Unmounting");
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        Click
      </button>
    </div>
  );
}
