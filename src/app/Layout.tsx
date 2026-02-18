import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="appContainer">
      <header className="appHeader">
        <div className="brandAndNav">
          <img src="/liftAndLive-logo.png" alt="Lift & Live" className="brandLogo" />

          <nav className="navTabs">
            <NavLink
              to="/onboarding"
              className={({ isActive }) => (isActive ? "navTab navTabActive" : "navTab")}
            >
              Onboarding
            </NavLink>

            <NavLink
              to="/plan"
              className={({ isActive }) => (isActive ? "navTab navTabActive" : "navTab")}
            >
              Plan
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "navTab navTabActive" : "navTab")}
            >
              Dashboard
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}
