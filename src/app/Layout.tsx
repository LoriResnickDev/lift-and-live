import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="appContainer">
      <header className="appHeader">
        <div className="brandCentered">
          <img src="/liftAndLive-logo.png" alt="Lift & Live" className="brandLogo" />
        </div>

        <nav className="navTabs navTabsCentered">
          <NavLink
            to="/onboarding"
            className={({ isActive }) => (isActive ? "navTab navTabActive" : "navTab")}
          >
            Profile
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
      </header>

      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}
