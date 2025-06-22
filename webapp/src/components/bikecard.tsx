import { Link } from "react-router";
import type { Bike } from "../model/bike";
import { Bicycle } from "react-bootstrap-icons";

type CardProps = {
  bike: Bike;
};

function getBorderRadius(bike: Bike) {
  console.log(bike.frameMaterial);
  switch (bike.frameMaterial) {
    case "Carbon":
      return "15px";
    case "Aluminum":
      return "8px";
    default:
      return "0px";
  }
}

const BikeCard: React.FC<CardProps> = ({ bike }) => {
  console.log("bike");
  console.log(bike);
  const link = "/bike?id=" + bike.id;
  let img;
  if (bike.images) {
  }
  const borderRadius = getBorderRadius(bike);
  const backgroundColor = bike.color ?? "white";
  return (
    <div
      className="card bikecard"
      style={{
        width: "20em",
        borderWidth: ".15em",
        borderRadius,
        borderColor: backgroundColor,
        backgroundColor,
      }}
    >
      <Link to={link} style={{ textDecoration: "none", color: "black" }}>
        {img && <img src={img} className="card-img-top" />}
        {!img && (
          <Bicycle
            width="64px"
            height="64px"
            opacity=".30"
            className="card-img-top"
          />
        )}
        <div
          className="card-body"
          style={{
            backgroundColor: "white",
            margin: "5px",
            border: ".1em solid white",
            borderRadius: "5px",
            height: "50px",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h5 className="card-title biketitle" style={{ textAlign: "center" }}>
            {bike.brand}&nbsp;{bike.model}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default BikeCard;
