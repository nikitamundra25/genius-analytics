import { AppRoutes } from "./config";

export default {
  items: [
    {
      name: "Dashboard",
      url: AppRoutes.HOME,
      icon: "icon-home"
    },
    {
      name: "Pickup",
      icon: "icon-briefcase",
      url: AppRoutes.HOME,
    },
    {
      name: "Charts",
      icon: "icon-pie-chart",
      url: AppRoutes.HOME,
    },
    // {
    //   name: "Content management",
    //   icon: "icon-grid",
    //   url: AppRoutes.ADD_HOME_PAGE,
    //   children: [
    //     {
    //       name: "Home Page",
    //       url: AppRoutes.ADD_HOME_PAGE,
    //       icon: "icon-home"
    //     }, 
    //     {
    //       name: "FAQ",
    //       url: AppRoutes.ADD_HOME_PAGE,
    //       icon: "icon-home"
    //     }
    //   ]
    // }
  ]
};
