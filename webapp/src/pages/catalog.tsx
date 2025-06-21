import { Link } from "react-router";
import Card from "../components/card";
import type { Bike } from "../model/bike";
import { Bicycle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function Catalog() {
  const [bikeList, setBikeList] = useState<Bike[]>([]);

  const bikes = bikeList.map((bike, indx) => {
    return (
      <div style={{ padding: "5px" }} key={indx}>
        <Card
          title={bike.brand + " " + bike.model}
          link={`/bike?id=${bike.id}`}
          imgHref=""
          color={bike.color || "black"}
        />
      </div>
    );
  });

  useEffect(() => {
    async function getbikes() {
      const resp = await fetch("/api/bike/list");
      if (resp.ok) {
        const json = await resp.json();
        setBikeList(json);
      }
    }
    getbikes();
  }, []);

  return (
    <>
      <h1>Bike Collection</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {bikes}
      </div>
      <br />
      <br />
      <Link to="/bike?id=0" className="actionButton">
        <Bicycle
          width="32px"
          height="32px"
          style={{ verticalAlign: "middle" }}
        />
        &nbsp;Add
      </Link>
    </>
  );
}

export default Catalog;
