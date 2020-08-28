import { createLogic, Logic } from "redux-logic";
import {
  RGIPerformanceActionTypes,
  RGIPerformanceDataFailed,
  RGIPerformanceDataSuccess,
  toggleRGIPerformanceLoader,
  toggleRGIPerformancePastLoader,
  RGIPerformancePastDataFailed,
  RGIPerformancePastDataSuccess,
  toggleRGIPerformanceFutureLoader,
  RGIPerformanceFutureDataFailed,
  RGIPerformanceFutureDataSuccess,
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


// past
const getRGIPerformancePastLogic = createLogic({
  type: RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIPerformancePastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastRGIPerformance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIPerformancePastDataFailed());
      done();
      return;
    }
    dispatch(
      RGIPerformancePastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getRGIPerformanceFutureLogic = createLogic({
  type: RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIPerformanceFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureRGIPerformance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIPerformanceFutureDataFailed());
      done();
      return;
    }
    dispatch(
      RGIPerformanceFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RGIPerformanceLogics: Logic[] = [getRGIPerformanceLogic as Logic, getRGIPerformancePastLogic as Logic, getRGIPerformanceFutureLogic as Logic];
