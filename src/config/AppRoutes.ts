import { IAppRoutes } from "../interfaces/AppRoutes";

export const AppRoutes: IAppRoutes = {
  MAIN: "/",

  LOGIN: "/login",
  HOME: "/dashboard",
  DASHBOARDMONTHLY: "/dashboard/monthly",
  DASHBOARDYEARLY: "/dashboard/yearly",
  PICKUPSUMMARY: "/pickup",
  PICKUPDETAIL: "/pickup/detail",
  PICKUPBOB: "/pickup/bob",
  MY_PROFILE: "/my-profile",
  USER: "#",
  ADD_USER: "/user/add",
  EDIT_USER: "/user/edit/:id",
  EMAILTEMPLATE: "/email-template",
  ADD_TEMPLATE: "/email-template/add",
  EDIT_TEMPLATE: "/email-template/edit/:id",
  //Home Page
  ADD_HOME_PAGE: "/homepage",
  ADD_FAQ: "/faq/add",
  FAQ: "/faq",
  COMING_SOON: "/coming-soon",
  PIVOT_TABLE: "/pivot/table"
};
