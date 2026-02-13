import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0 }}>Lift &amp; Live</h1>
        <nav style={{ marginTop: "0.75rem", display: "flex", gap: "1rem" }}>
          <Link to="/onboarding">Onboarding</Link>
          <Link to="/plan">Plan</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
