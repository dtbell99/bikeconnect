import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/catalog">Catalog</Link>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
