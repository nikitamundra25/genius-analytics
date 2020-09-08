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

const PickupBOB = React.lazy(() =>
  import("../app/containers/PickupBOB")
);

const PivotTable = React.lazy(() =>
  import("../app/containers/PivotTable")
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
  {
    path: AppRoutes.PICKUPBOB,
    name: "Pickup BOB",
    component: PickupBOB,
    exact: true,
  },
  {
    path: AppRoutes.PIVOT_TABLE,
    name: "Pivot Table",
    component: PivotTable,
    exact: true,
  },
];

export default routes;
