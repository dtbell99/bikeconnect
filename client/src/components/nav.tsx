import { useEffect, useState } from "react";
import logo from "../assets/nav_logo.png";
import { Bicycle, People, Shop } from "react-bootstrap-icons";
import { NavLink } from "react-router";

const hideShowWidth = 600;

function Nav() {
  const [showTitle, setShowTitle] = useState<boolean>(
    window.innerWidth < hideShowWidth ? false : true
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      const innerWidth = window.innerWidth;
      let newShowTitle = false;
      if (innerWidth >= hideShowWidth) newShowTitle = true;
      setShowTitle((prev) => (prev !== newShowTitle ? newShowTitle : prev));
    });
  }, []);

  const title = "BikeConnect";
  const collection = "Collection";
  const friends = "Friends";
  const market = "Marketplace";

  return (
    <div className="bcnav">
      <NavLink to="/" className="icon">
        <img
          src={logo}
          alt="Logo"
          width="48"
          style={{ verticalAlign: "middle", marginRight: "5px" }}
        />
        {showTitle === true && title}
      </NavLink>
      <NavLink className="icon" to="/catalog">
        <Bicycle
          height={24}
          width={24}
          style={{
            verticalAlign: "middle",
            marginLeft: "25px",
            marginRight: "5px",
          }}
        />
        {showTitle === true && collection}
      </NavLink>

      <NavLink className="icon" to="/friends">
        <People
          height={24}
          width={24}
          style={{
            verticalAlign: "middle",
            marginLeft: "20px",
            marginRight: "5px",
          }}
        />
        {showTitle === true && friends}
      </NavLink>

      <NavLink className="icon" to="/marketplace">
        <Shop
          height={24}
          width={24}
          style={{
            verticalAlign: "middle",
            marginLeft: "20px",
            marginRight: "5px",
          }}
        />
        {showTitle === true && market}
      </NavLink>
    </div>
  );
}

export default Nav;
