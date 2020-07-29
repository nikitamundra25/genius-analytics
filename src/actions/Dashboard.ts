import { createAction } from "redux-actions";

export enum DashBoardTypes {
  DASHBOARD_MAIN_REQUEST = "Request dashboard main data list!",
  DASHBOARD_MAIN_SUCCESS = "dashboard main data list Successfully!",
  DASHBOARD_MAIN_FAILURE = "dashboard main data list Failed",
  TOGGLE_DASHBOARD_LOADER = "Toggle dashboard loader",

  DASHBOARD_MONTHLY_REQUEST = "Request dashboard MONTHLY data list!",
  DASHBOARD_MONTHLY_SUCCESS = "dashboard MONTHLY data list Successfully!",
  DASHBOARD_MONTHLY_FAILURE = "dashboard MONTHLY data list Failed",

  DASHBOARD_YEARLY_REQUEST = "Request dashboard YEARLY data list!",
  DASHBOARD_YEARLY_SUCCESS = "dashboard YEARLY data list Successfully!",
  DASHBOARD_YEARLY_FAILURE = "dashboard YEARLY data list Failed",
  // widgets
  GET_DASHBOARD_WIDGETS = "Get dashboard widgets.",
  DASHBOARD_WIDGETS_SUCCESS = "Dashboard widgets list fetched successfully.",
  DASHBOARD_WIDGETS_FAILED = "Dashboard widgets list not fetched successfully.",
}

export const ToggleDashboardLoader = createAction(
  DashBoardTypes.TOGGLE_DASHBOARD_LOADER
);

/* Dashboard main list
 */
export const DashboardMainRequest = createAction(
  DashBoardTypes.DASHBOARD_MAIN_REQUEST
);

export const DashboardMainSuccess = createAction(
  DashBoardTypes.DASHBOARD_MAIN_SUCCESS
);
export const DashboardMainFailed = createAction(
  DashBoardTypes.DASHBOARD_MAIN_FAILURE
);

/* Dashboard monthly list
 */
export const DashboardMonthlyRequest = createAction(
  DashBoardTypes.DASHBOARD_MONTHLY_REQUEST
);

export const DashboardMonthlySuccess = createAction(
  DashBoardTypes.DASHBOARD_MONTHLY_SUCCESS
);
export const DashboardMonthlyFailed = createAction(
  DashBoardTypes.DASHBOARD_MONTHLY_FAILURE
);

/* Dashboard yearly list
 */
export const DashboardYearlyRequest = createAction(
  DashBoardTypes.DASHBOARD_YEARLY_REQUEST
);

export const DashboardYearlySuccess = createAction(
  DashBoardTypes.DASHBOARD_YEARLY_SUCCESS
);
export const DashboardYearlyFailed = createAction(
  DashBoardTypes.DASHBOARD_YEARLY_FAILURE
);
// widget actions
export const getWidgets = createAction(DashBoardTypes.GET_DASHBOARD_WIDGETS);
export const getWidgetsSuccess = createAction(
  DashBoardTypes.DASHBOARD_WIDGETS_SUCCESS
);
export const getWidgetsFailed = createAction(
  DashBoardTypes.DASHBOARD_WIDGETS_FAILED
);
