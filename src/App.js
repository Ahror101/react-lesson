import React, { useState } from "react";
import Counter from "./counter";

export default function () {
  const [son, setSon] = useState(500)
  const [name, setName] = useState("Begzod")
  const [active, setActive] = useState(true)

  
  const [first, setFirst] = useState(0)
  const [walk, setWalk] = useState(0)

  function First () {
    setFirst(first +1)
  }
  function Walk () {
    setWalk(walk +5)
  }

  function toggle() {
    setActive(!active)
    console.log(active);
  }

  function change() {
    setSon(1000)
    setName("Alisher")
  }





  return (
    <div>
      <h1> {son} </h1>
      <h1> {name}</h1>
      <h1>{first}</h1>
      <h1>{walk}</h1>
      <h1>{active ? <h1> Log in </h1> : <h2>Logo out</h2>}</h1>
      <button onClick={change}> change </button>
      <button onClick={toggle}> {active ? "log in" : "logo out"} </button>
      <button onClick={First}>Qadamni kengaytirish</button>
      <button onClick={Walk}>Yurish</button>
      <Counter />
    </div>
  )
}