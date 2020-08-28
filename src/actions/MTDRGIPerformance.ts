import { createAction } from "redux-actions";

export enum MTRDRGIPerformanceActionTypes {
  REQUETS_MTRDRGI_PERFORMANCE_DATA = "Request MTDR RGI performace Data",
  TOGGLE_MTRDRGI_PERFORMANCE_LOADER = "Toggle MTDR RGI performace loader",
  MTRDRGI_PERFORMANCE_DATA_SUCCESS = "Requested MTDR RGI performace data fetched successfully",
  MTRDRGI_PERFORMANCE_DATA_FAILED = "Requested MTDR RGI performace data fetching failed",


  REQUETS_MTRDRGI_PERFORMANCE_PAST_DATA = "Request MTDR RGI performace past Data",
  TOGGLE_MTRDRGI_PERFORMANCE_PAST_LOADER = "Toggle MTDR RGI performace past loader",
  MTRDRGI_PERFORMANCE_PAST_DATA_SUCCESS = "Requested MTDR RGI performace past data fetched successfully",
  MTRDRGI_PERFORMANCE_PAST_DATA_FAILED = "Requested MTDR RGI performace past data fetching failed",

  REQUETS_MTRDRGI_PERFORMANCE_FUTURE_DATA = "Request MTDR RGI performace future Data",
  TOGGLE_MTRDRGI_PERFORMANCE_FUTURE_LOADER = "Toggle MTDR RGI performace future loader",
  MTRDRGI_PERFORMANCE_FUTURE_DATA_SUCCESS = "Requested MTDR RGI performace future data fetched successfully",
  MTRDRGI_PERFORMANCE_FUTURE_DATA_FAILED = "Requested MTDR RGI performace future data fetching failed",
}

export const requestMTRDRGIPerformanceData = createAction(MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_DATA);
export const toggleMTRDRGIPerformanceLoader = createAction(MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_LOADER);
export const MTRDRGIPerformanceDataSuccess = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_DATA_SUCCESS);
export const MTRDRGIPerformanceDataFailed = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_DATA_FAILED);

//  past
export const requestMTRDRGIPerformancePastData = createAction(MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_PAST_DATA);
export const toggleMTRDRGIPerformancePastLoader = createAction(MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_PAST_LOADER);
export const MTRDRGIPerformancePastDataSuccess = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_PAST_DATA_SUCCESS);
export const MTRDRGIPerformancePastDataFailed = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_PAST_DATA_FAILED);

// future
export const requestMTRDRGIPerformanceFutureData = createAction(MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_FUTURE_DATA);
export const toggleMTRDRGIPerformanceFutureLoader = createAction(MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_FUTURE_LOADER);
export const MTRDRGIPerformanceFutureDataSuccess = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_FUTURE_DATA_SUCCESS);
export const MTRDRGIPerformanceFutureDataFailed = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_FUTURE_DATA_FAILED);
