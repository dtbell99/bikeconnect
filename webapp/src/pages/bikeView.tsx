import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Bike } from "../model/bike";

function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState<number>(Number(searchParams.get("id")) || 0);
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [frameSize, setFrameSize] = useState<string>("");
  const [frameMaterial, setFrameMaterial] = useState<string>("Aluminum");
  const [color, setColor] = useState<string>("");

  const save = async () => {
    const body = { id, brand, model, frameSize, frameMaterial, color };
    if (!body.brand || !body.model || !body.frameMaterial) {
      console.log(body);
      alert("Please enter all required fields");
      return;
    }
    const resp = await fetch("/api/bike/save", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "content-type": "application/json" },
    });
    if (resp.ok) {
      const json = await resp.json();
      console.log(json);
      if (id === 0) {
        setId(json.id);
        setSearchParams({ id: json.id });
      }
    }
  };

  useEffect(() => {
    async function getBike(bikeId: number) {
      const resp = await fetch("/api/bike/" + bikeId);
      if (resp.ok) {
        const json = (await resp.json()) as Bike;
        console.log(json);
        setBrand(json.brand);
        setModel(json.model);
        setFrameMaterial(json.frameMaterial);
        setId(json.id);
        if (json.frameSize) setFrameSize(json.frameSize);
        if (json.color) setColor(json.color);
        setFrameMaterial(json.frameMaterial);
      }
    }
    if (id) {
      getBike(id);
    }
  }, []);

  const saveButtonText = id === 0 ? "Add" : "Update";

  const uploadImage = () => {
    const fileInput = document.getElementById("fid") as HTMLInputElement;
    if (!fileInput) return;
    const files = fileInput.files;
    if (!files) return;
    // TODO: Add check on number of files already uploaded and error if they are trying to go over the limit
    for (const f of files) {
      if (f.size > 800)
    }
  };

  return (
    <>
      <div className="formbox">
        * Required
        <div className="forminput">
          <div className="row">
            <h3>Brand *</h3>
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
            <h3>Model *</h3>
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
                value={frameSize}
                onChange={(e) => setFrameSize(e.target.value)}
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
        <div className="forminput">
          <div className="row">
            <h3>Color</h3>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="btn btn-success"
          style={{ margin: "20px" }}
          onClick={save}
        >
          {saveButtonText}
        </button>
        {id > 0 && (
          <div className="forminput">
            <h3>Images</h3>
            <input type="file" id="fid" name="fname" accept="image/*" />
            <button onClick={uploadImage}>Upload</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Catalog;
