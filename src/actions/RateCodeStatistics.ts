import { createAction } from "redux-actions";

export enum RateCodeStatisticsActionTypes {
  REQUETS_RATE_CODE_STATISTICS_DATA = "Request Rate Code Statistics Data",
  TOGGLE_RATE_CODE_STATISTICS_LOADER = "Toggle Rate Code Statistics loader",
  RATE_CODE_STATISTICS_DATA_SUCCESS = "Requested Rate Code Statistics data fetched successfully",
  RATE_CODE_STATISTICS_DATA_FAILED = "Requested Rate Code Statistics data fetching failed",
}

export const requestRateCodeStatisticsData = createAction(RateCodeStatisticsActionTypes.REQUETS_RATE_CODE_STATISTICS_DATA);
export const toggleRateCodeStatisticsLoader = createAction(RateCodeStatisticsActionTypes.TOGGLE_RATE_CODE_STATISTICS_LOADER);
export const RateCodeStatisticsDataSuccess = createAction(RateCodeStatisticsActionTypes.RATE_CODE_STATISTICS_DATA_SUCCESS);
export const RateCodeStatisticsDataFailed = createAction(RateCodeStatisticsActionTypes.RATE_CODE_STATISTICS_DATA_FAILED);
