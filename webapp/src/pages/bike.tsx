import { Link } from "react-router";
import Card from "../components/card";
import { Bicycle } from "react-bootstrap-icons";
import { useState } from "react";

function Catalog() {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [frameMaterial, setFrameMaterial] = useState<string>("");

  const save = () => {
    alert("saving");
  };

  return (
    <>
      <div className="formbox">
        <div className="forminput">
          <div className="row">
            <h3>Brand</h3>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="forminput">
          <div className="row">
            <h3>Model</h3>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="forminput">
          <div className="row">
            <h3>Size</h3>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="forminput">
          <div className="row">
            <h3>Frame Material</h3>
            <div className="col-sm-6">
              <select
                className="form-control"
                value={frameMaterial}
                onChange={(e) => setFrameMaterial(e.target.value)}
              >
                <option value="Aluminum">Aluminum</option>
                <option value="Carbon">Carbon</option>
                <option value="Steel">Steel</option>
                <option value="Titanium">Titanium</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className="btn btn-success"
          style={{ margin: "20px" }}
          onClick={save}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Catalog;
