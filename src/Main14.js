import React from 'react'
import {useState,useEffect,useRef} from "react";
import ReactDom from "react-dom/client";

export default function Main14() {
    const[name, setName]=useState();
    const prevName = useRef(0);
    useEffect(()=>{
    prevName.current = name;
},[name]);
  return (
    <div>
      <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <h1>Current Name:{name}</h1>
      <h1>Previous Name:{prevName.current}</h1>
    </div>
  )
}
