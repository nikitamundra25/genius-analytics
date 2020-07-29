import { createAction } from "redux-actions";

export enum RGIPerformanceActionTypes {
  REQUETS_RGI_PERFORMANCE_DATA = "Request RGIPerformance Data",
  TOGGLE_RGI_PERFORMANCE_LOADER = "Toggle RGIPerformance loader",
  RGI_PERFORMANCE_DATA_SUCCESS = "Requested RGIPerformance data fetched successfully",
  RGI_PERFORMANCE_DATA_FAILED = "Requested RGIPerformance data fetching failed",
}

export const requestRGIPerformanceData = createAction(RGIPerformanceActionTypes.REQUETS_RGI_PERFORMANCE_DATA);
export const toggleRGIPerformanceLoader = createAction(RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_LOADER);
export const RGIPerformanceDataSuccess = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_DATA_SUCCESS);
export const RGIPerformanceDataFailed = createAction(RGIPerformanceActionTypes.RGI_PERFORMANCE_DATA_FAILED);
