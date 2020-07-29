import { createLogic, Logic } from "redux-logic";
import {
  MTRDRGIPerformanceActionTypes,
  MTRDRGIPerformanceDataFailed,
  MTRDRGIPerformanceDataSuccess,
  toggleMTRDRGIPerformanceLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getMTRDRGIPerformanceDataLogic = createLogic({
  type: MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMTRDRGIPerformanceLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/MTDRGIPerformance.json",
      "GET"
    );
    if (isError) {
      dispatch(MTRDRGIPerformanceDataFailed());
      done();
      return;
    }
    dispatch(
      MTRDRGIPerformanceDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MTRDRGIPerformanceDataLogics: Logic[] = [getMTRDRGIPerformanceDataLogic as Logic];
