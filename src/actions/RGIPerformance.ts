import { createAction } from "redux-actions";

export enum RGIPerformanceActionTypes {
  REQUETS_RGI_PERFORMANCE_DATA = "Request RGIPerformance Data",
  TOGGLE_RGI_PERFORMANCE_LOADER = "Toggle RGIPerformance loader",
  RGI_PERFORMANCE_DATA_SUCCESS = "Requested RGIPerformance data fetched successfully",
  RGI_PERFORMANCE_DATA_FAILED = "Requested RGIPerformance data fetching failed",

  REQUETS_RGI_PERFORMANCE_PAST_DATA = "Request RGIPerformance past Data",
  TOGGLE_RGI_PERFORMANCE_PAST_LOADER = "Toggle RGIPerformance past loader",
  RGI_PERFORMANCE_PAST_DATA_SUCCESS = "Requested RGIPerformance past data fetched successfully",
  RGI_PERFORMANCE_PAST_DATA_FAILED = "Requested RGIPerformance past data fetching failed",

  REQUETS_RGI_PERFORMANCE_FUTURE_DATA = "Request RGIPerformance future Data",
  TOGGLE_RGI_PERFORMANCE_FUTURE_LOADER = "Toggle RGIPerformance future loader",
  RGI_PERFORMANCE_FUTURE_DATA_SUCCESS = "Requested RGIPerformance future data fetched successfully",
  RGI_PERFORMANCE_FUTURE_DATA_FAILED = "Requested RGIPerformance future data fetching failed",
}

export const requestRGIPerformanceData = createAction(RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_DATA);
export const toggleRGIPerformanceLoader = createAction(RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_LOADER);
export const RGIPerformanceDataSuccess = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_DATA_SUCCESS);
export const RGIPerformanceDataFailed = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_DATA_FAILED);

// past
export const requestRGIPerformancePastData = createAction(RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_PAST_DATA);
export const toggleRGIPerformancePastLoader = createAction(RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_PAST_LOADER);
export const RGIPerformancePastDataSuccess = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_PAST_DATA_SUCCESS);
export const RGIPerformancePastDataFailed = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_PAST_DATA_FAILED);

// future
export const requestRGIPerformanceFutureData = createAction(RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_FUTURE_DATA);
export const toggleRGIPerformanceFutureLoader = createAction(RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_FUTURE_LOADER);
export const RGIPerformanceFutureDataSuccess = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_FUTURE_DATA_SUCCESS);
export const RGIPerformanceFutureDataFailed = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_FUTURE_DATA_FAILED);
