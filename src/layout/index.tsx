import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Style from "./index.module.css";

function Layout() {
  const location = useLocation();

  return (
    <div className={Style.app}>
      <TopBar currLoc={location.pathname} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
