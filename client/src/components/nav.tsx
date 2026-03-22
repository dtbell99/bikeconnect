import logo from "../assets/nav_logo.png";
import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <NavLink
        to="/"
        className="icon"
        style={{ fontFamily: "arial", fontWeight: "bold" }}
      >
        <img
          src={logo}
          alt="Logo"
          width="48"
          style={{ verticalAlign: "middle", marginRight: "5px" }}
        />
        BBC
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ marginRight: "10px" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/members"
              style={{
                margin: "20px",
                fontFamily: "arial",
              }}
            >
              Members
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/catalog"
              style={{
                margin: "20px",
                fontFamily: "arial",
              }}
            >
              Vault
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/sos"
              style={{
                margin: "20px",
                fontFamily: "arial",
              }}
            >
              SOS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/marketplace"
              style={{
                margin: "20px",
                fontFamily: "arial",
              }}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
