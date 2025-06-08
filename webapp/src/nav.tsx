import { useEffect, useState } from "react";
import logo from "./assets/nav_logo.png";
import { Book, People, Shop } from "react-bootstrap-icons";
import { NavLink } from "react-router";

function Nav() {
  const [showTitle, setShowTitle] = useState<boolean>(
    window.innerWidth < 500 ? false : true
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      const innerWidth = window.innerWidth;
      let newShowTitle = false;
      if (innerWidth >= 500) newShowTitle = true;
      setShowTitle((prev) => (prev !== newShowTitle ? newShowTitle : prev));
    });
  }, []);

  const title = "BikeConnect";

  return (
    <div className="bcnav">
      <NavLink to="/">
        <img src={logo} alt="Logo" width="48" />
      </NavLink>
      {showTitle === true && title}
      <NavLink className="icon" to="/catalog">
        <Book height={24} width={24} />
      </NavLink>

      <NavLink className="icon" to="/friends">
        <People height={24} width={24} />
      </NavLink>

      <NavLink className="icon" to="/marketplace">
        <Shop height={24} width={24} />
      </NavLink>
    </div>
  );
}

export default Nav;
