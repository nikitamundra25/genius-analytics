import {
  ToggleDashboardLoader,
  getWidgetsFailed,
  getWidgetsSuccess,
  ToggleDashboardMonthlyLoader,
} from "./../actions/Dashboard";
import { createLogic } from "redux-logic";
import { toast } from "react-toastify";
import {
  DashBoardTypes,
  DashboardMainSuccess,
  showLoader,
  hideLoader,
  DashboardMainFailed,
  DashboardMonthlySuccess,
  DashboardMonthlyFailed,
  DashboardYearlySuccess,
  DashboardYearlyFailed,
} from "../actions";
import { ApiHelper } from "../helper";

/**
 *
 */

let toastId: any = null;
// To get dashboard main list
const dashboardLogic = createLogic({
  type: DashBoardTypes.DASHBOARD_MAIN_REQUEST,
  async process(data, dispatch: any, done) {
    dispatch(
      ToggleDashboardLoader({
        isLoading: true,
      })
    );
    const response = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard/",
      "dashboard.json",
      "GET",
      undefined,
      undefined,
      undefined
    );

    if (response && !response.isError) {
      dispatch(
        DashboardMainSuccess({
          dashboardMainList: response.data.data,
        })
      );
      done();
    } else {
      if (!toast.isActive(toastId)) {
        toastId = toast.error("Something went wrong! Please try again later");
      }
      dispatch(
        DashboardMainFailed({
          error: response.messages[0],
        })
      );
      done();
    }
  },
});

//  To get dashboard yearly list
const dashboardYearlyLogic = createLogic({
  type: DashBoardTypes.DASHBOARD_YEARLY_REQUEST,
  async process(data, dispatch: any, done) {
    dispatch(showLoader());
    const response = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard/",
      "dashboardYearly.json",
      "GET",
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      dispatch(hideLoader());

      dispatch(
        DashboardYearlySuccess({
          dashboardYearlyList: response.data.data,
        })
      );
      // dispatch(push("/dashboard"));
      done();
    } else {
      dispatch(hideLoader());
      console.log(response);
      if (!toast.isActive(toastId)) {
        console.log("fffffffffff");
        toastId = toast.error("Something went wrong! Please try again later");
      }
      dispatch(
        DashboardYearlyFailed({
          error: response.messages[0],
        })
      );
      done();
    }
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
  dashboardLogic,
  dashboardMonthlyLogic,
  dashboardYearlyLogic,
  getWidgetsLogic,
];
