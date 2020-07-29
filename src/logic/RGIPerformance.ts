import { createLogic, Logic } from "redux-logic";
import {
  RGIPerformanceActionTypes,
  RGIPerformanceDataFailed,
  RGIPerformanceDataSuccess,
  toggleRGIPerformanceLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getRGIPerformanceLogic = createLogic({
  type: RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIPerformanceLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/RGIPerformance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIPerformanceDataFailed());
      done();
      return;
    }
    dispatch(
      RGIPerformanceDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RGIPerformanceLogics: Logic[] = [getRGIPerformanceLogic as Logic];
