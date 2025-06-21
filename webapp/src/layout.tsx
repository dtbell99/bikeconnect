import { Outlet } from "react-router";
import Nav from "./components/nav";

function Layout() {
  return (
    <>
      <Nav />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
