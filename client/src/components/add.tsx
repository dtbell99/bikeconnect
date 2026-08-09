import { useState } from "react";

function Add() {
  const [type, setType] = useState<string>("");

  const add = () => {
    alert("type:" + type);
  };

  return (
    <div className="catalog-item-adder">
      <select
        className="select-dropdown"
        onBlur={add}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="bike">Bike</option>
        <option value="parts">Part</option>
        <option value="clothing">Clothing</option>
        <option value="misc">Misc Item</option>
      </select>
      <button className="btn btn-primary" onClick={add}>
        Create
      </button>
    </div>
  );
}

export default Add;
