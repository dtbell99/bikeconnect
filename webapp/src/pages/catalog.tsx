import { Link } from "react-router";
import Card from "../components/card";
import { Bicycle } from "react-bootstrap-icons";

function Catalog() {
  return (
    <>
      <h1>Bike Collection</h1>
      <br />
      <br />
      <Link to="/newbike" className="actionButton">
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
