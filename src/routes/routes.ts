import React from "react";
import { AppRoutes } from "../config";

const Home = React.lazy(() => import("../app/containers/Home"));
const DashboardMonthly = React.lazy(() =>
  import("../app/containers/DashboardMonthly")
);
const DashboardYearly = React.lazy(() =>
  import("../app/containers/DashboardYearly")
);
const PickupSummary = React.lazy(() =>
  import("../app/containers/PickupSummary")
);
const PickupDetail = React.lazy(() =>
  import("../app/containers/PickupDetail")
);

const ComingSoon = React.lazy(() => import("../app/containers/ComingSoon"));

const routes = [
  { path: AppRoutes.MAIN, exact: true, name: "Home" },
  {
    path: AppRoutes.COMING_SOON,
    name: "Coming soon",
    component: ComingSoon,
    exact: true,
  },
  {
    path: AppRoutes.HOME,
    name: "Dashboard",
    component: Home,
    exact: true,
  },
  {
    path: AppRoutes.DASHBOARDMONTHLY,
    name: "Dashboard Monthly",
    component: DashboardMonthly,
    exact: true,
  },
  {
    path: AppRoutes.DASHBOARDYEARLY,
    name: "Dashboard Yearly",
    component: DashboardYearly,
    exact: true,
  },
  {
    path: AppRoutes.PICKUPSUMMARY,
    name: "Pickup Summary",
    component: PickupSummary,
    exact: true,
  },
  {
    path: AppRoutes.PICKUPDETAIL,
    name: "Pickup Detail",
    component: PickupDetail,
    exact: true,
  },
];

export default routes;
