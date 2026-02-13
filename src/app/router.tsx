import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import OnboardingPage from "../features/onboarding/OnboardingPage";
import PlanPage from "../features/plan/PlanPage";
import DashboardPage from "../features/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <OnboardingPage /> },
      { path: "onboarding", element: <OnboardingPage /> },
      { path: "plan", element: <PlanPage /> },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);