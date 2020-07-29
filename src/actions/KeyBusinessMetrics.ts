import { createAction } from "redux-actions";

export enum KeyBusinessMetricsActionTypes {
  REQUETS_KEY_BUSINESS_METRICS_DATA = "Request Key business metrics Data",
  TOGGLE_KEY_BUSINESS_METRICS_LOADER = "Toggle Key business metrics loader",
  KEY_BUSINESS_METRICS_DATA_SUCCESS = "Requested Key business metrics data fetched successfully",
  KEY_BUSINESS_METRICS_DATA_FAILED = "Requested Key business metrics data fetching failed",
}

export const requestKeyBusinessMetricsData = createAction(KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_DATA);
export const toggleKeyBusinessMetricsLoader = createAction(KeyBusinessMetricsActionTypes.TOGGLE_KEY_BUSINESS_METRICS_LOADER);
export const KeyBusinessMetricsDataSuccess = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_DATA_SUCCESS);
export const KeyBusinessMetricsDataFailed = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_DATA_FAILED);
