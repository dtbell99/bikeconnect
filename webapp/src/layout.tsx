import { Outlet } from "react-router";
import Nav from "./nav";

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
