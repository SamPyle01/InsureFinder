import { createBrowserRouter } from "react-router";
import Root from "./screens/Root";
import Home from "./screens/Home";
import Plans from "./screens/Plans";
import PlanDetail from "./screens/PlanDetail";
import ComparePlans from "./screens/ComparePlans";
import Learn from "./screens/Learn";
import Profile from "./screens/Profile";
import LocationSetup from "./screens/LocationSetup";
import WriteReview from "./screens/WriteReview";
import Onboarding from "./screens/Onboarding";
import Settings from "./screens/Settings";
import PlanTypes from "./screens/PlanTypes";
import CostGuide from "./screens/CostGuide";
import Welcome from "./screens/Welcome";
import HealthProfile from "./screens/HealthProfile";

export const router = createBrowserRouter([
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Welcome },
      { path: "location", Component: LocationSetup },
      { path: "home", Component: Home },
      { path: "plans", Component: Plans },
      { path: "plans/:id", Component: PlanDetail },
      { path: "compare", Component: ComparePlans },
      { path: "learn", Component: Learn },
      { path: "learn/plan-types", Component: PlanTypes },
      { path: "learn/cost-guide", Component: CostGuide },
      { path: "profile", Component: Profile },
      { path: "health-profile", Component: HealthProfile },
      { path: "settings", Component: Settings },
      { path: "review/:planId", Component: WriteReview },
    ],
  },
]);