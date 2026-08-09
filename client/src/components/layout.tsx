import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="layout-shell">
      <header className="layout-header">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span className="nav-logo-icon">🚲</span>
            <span>BikeConnect</span>
          </NavLink>
          <nav className="nav-menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link${isActive ? " active-link" : ""}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `nav-link${isActive ? " active-link" : ""}`
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `nav-link${isActive ? " active-link" : ""}`
              }
            >
              Login
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; {new Date().getFullYear()} BikeConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
