import {
  ToggleDashboardLoader,
  getWidgetsFailed,
  getWidgetsSuccess,
  ToggleDashboardMonthlyLoader,
  ToggleDashboardYearlyLoader,
} from "./../actions/Dashboard";
import { createLogic } from "redux-logic";
import {
  DashBoardTypes,
  DashboardMonthlySuccess,
  DashboardMonthlyFailed,
  DashboardYearlySuccess,
  DashboardYearlyFailed,
} from "../actions";
import { ApiHelper } from "../helper";

/**
 *
 */



//  To get dashboard yearly list
const dashboardYearlyLogic = createLogic({
  type: DashBoardTypes.DASHBOARD_YEARLY_REQUEST,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      ToggleDashboardYearlyLoader({
        isLoading: true,
      })
    );
    const {
      isError,
      data,
      
    } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/widgetYearly.json",
      "GET"
    );
    if (isError) {
      dispatch(DashboardYearlyFailed({}));
      done();
      return;
    }
    dispatch(
      DashboardYearlySuccess({
        widgets: data,
      })
    );
    done();
  },
});




//  To get dashboard monthly list

const dashboardMonthlyLogic = createLogic({
  type: DashBoardTypes.DASHBOARD_MONTHLY_REQUEST,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      ToggleDashboardMonthlyLoader({
        isLoading: true,
      })
    );
    const {
      isError,
      data,
      
    } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/widgetsMonthly.json",
      "GET"
    );
    if (isError) {
      dispatch(DashboardMonthlyFailed({}));
      done();
      return;
    }
    dispatch(
      DashboardMonthlySuccess({
        widgets: data,
      })
    );
    done();
  },
});



//
const getWidgetsLogic = createLogic({
  type: DashBoardTypes.GET_DASHBOARD_WIDGETS,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      ToggleDashboardLoader({
        isLoading: true,
      })
    );
    const {
      isError,
      data,
      
    } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/widgets.json",
      "GET"
    );
    if (isError) {
      dispatch(getWidgetsFailed({}));
      done();
      return;
    }
    dispatch(
      getWidgetsSuccess({
        widgets: data,
      })
    );
    done();
  },
});
//
export const DashBoardLogics = [
  // dashboardLogic,
  dashboardMonthlyLogic,
  dashboardYearlyLogic,
  getWidgetsLogic,
];
