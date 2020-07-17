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
    dispatch(showLoader());
    const response = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard/",
      "dashboard.json",
      "GET",
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      dispatch(hideLoader());

      dispatch(
        DashboardMainSuccess({
          dashboardMainList: response.data.data,
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
        DashboardMainFailed({
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
  async process(data, dispatch: any, done) {
    dispatch(showLoader());
    const response = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard/",
      "dashboardMonthly.json",
      "GET",
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      dispatch(hideLoader());

      dispatch(
        DashboardMonthlySuccess({
          dashboardMonthlyList: response.data.data,
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
        DashboardMonthlyFailed({
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
export const DashBoardLogics = [
  dashboardLogic,
  dashboardMonthlyLogic,
  dashboardYearlyLogic,
];
