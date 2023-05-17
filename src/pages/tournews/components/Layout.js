import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import classes from "./Layout.module.css";

function Layout() {
  return (
    <>
      <Nav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
