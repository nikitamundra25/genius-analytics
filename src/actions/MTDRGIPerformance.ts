import { createAction } from "redux-actions";

export enum MTRDRGIPerformanceActionTypes {
  REQUETS_MTRDRGI_PERFORMANCE_DATA = "Request MTDR RGI performace Data",
  TOGGLE_MTRDRGI_PERFORMANCE_LOADER = "Toggle MTDR RGI performace loader",
  MTRDRGI_PERFORMANCE_DATA_SUCCESS = "Requested MTDR RGI performace data fetched successfully",
  MTRDRGI_PERFORMANCE_DATA_FAILED = "Requested MTDR RGI performace data fetching failed",
}

export const requestMTRDRGIPerformanceData = createAction(MTRDRGIPerformanceActionTypes.REQUETS_MTRDRGI_PERFORMANCE_DATA);
export const toggleMTRDRGIPerformanceLoader = createAction(MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_LOADER);
export const MTRDRGIPerformanceDataSuccess = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_DATA_SUCCESS);
export const MTRDRGIPerformanceDataFailed = createAction(MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_DATA_FAILED);
