import { useState } from "react";

function Add() {
  const [type, setType] = useState<string>("");

  const add = () => {
    alert("type:" + type);
  };

  return (
    <>
      <select onBlur={add} onChange={(e) => setType(e.target.value)}>
        <option value="bike">Bike</option>
        <option value="parts">Part</option>
        <option value="clothing">Clothing</option>
        <option value="misc">Misc Item</option>
      </select>
      <button onClick={add}>Create</button>
    </>
  );
}

export default Add;
