import { createLogic, Logic } from "redux-logic";
import {
  MTRDRGIPerformanceActionTypes,
  MTRDRGIPerformanceDataFailed,
  MTRDRGIPerformanceDataSuccess,
  toggleMTRDRGIPerformanceLoader,
  toggleMTRDRGIPerformancePastLoader,
  MTRDRGIPerformancePastDataFailed,
  MTRDRGIPerformancePastDataSuccess,
  toggleMTRDRGIPerformanceFutureLoader,
  MTRDRGIPerformanceFutureDataFailed,
  MTRDRGIPerformanceFutureDataSuccess,
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

// past
const getMTRDRGIPerformanceDataPastLogic = createLogic({
  type: MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMTRDRGIPerformancePastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastMTDRGIPerformance.json",
      "GET"
    );
    if (isError) {
      dispatch(MTRDRGIPerformancePastDataFailed());
      done();
      return;
    }
    dispatch(
      MTRDRGIPerformancePastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getMTRDRGIPerformanceDataFutureLogic = createLogic({
  type: MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMTRDRGIPerformanceFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureMTDRGIPerformance.json",
      "GET"
    );
    if (isError) {
      dispatch(MTRDRGIPerformanceFutureDataFailed());
      done();
      return;
    }
    dispatch(
      MTRDRGIPerformanceFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MTRDRGIPerformanceDataLogics: Logic[] = [getMTRDRGIPerformanceDataLogic as Logic, getMTRDRGIPerformanceDataPastLogic as Logic, getMTRDRGIPerformanceDataFutureLogic as Logic];
