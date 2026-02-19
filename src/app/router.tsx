import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProfilePage from "../features/profile/ProfilePage";
import PlanPage from "../features/plan/PlanPage";
import DashboardPage from "../features/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProfilePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "plan", element: <PlanPage /> },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);