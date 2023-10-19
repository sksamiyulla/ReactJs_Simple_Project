import React from 'react'
import {useState} from 'react'

export default function Main4() {
    const [a,setA]=useState()
    const [b,setB]=useState()
    const [r1,setR1] = useState()
    const [r2,setR2] = useState()
    const [r3,setR3] = useState()
    const [r4,setR4] = useState()
    const handlesubmit = () => {
        setR1(Number(a)+Number(b))
        setR2(Number(a)-Number(b))
        setR3(Number(a)/Number(b))
        setR4(Number(a)*Number(b))
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setA(e.target.value)}/>
        <input type="text" onChange={(e)=>setB(e.target.value)}/>
        <button onClick={handlesubmit}>Calculate</button>
        <hr></hr>
        <p>Addition: {r1}</p>
        <p>{r2}</p>
        <p>{r3}</p>
        <p>{r4}</p>
    </div>
  )
}
