import { createAction } from "redux-actions";

export enum KeyBusinessMetricsActionTypes {
  REQUETS_KEY_BUSINESS_METRICS_DATA = "Request Key business metrics Data",
  TOGGLE_KEY_BUSINESS_METRICS_LOADER = "Toggle Key business metrics loader",
  KEY_BUSINESS_METRICS_DATA_SUCCESS = "Requested Key business metrics data fetched successfully",
  KEY_BUSINESS_METRICS_DATA_FAILED = "Requested Key business metrics data fetching failed",

  REQUETS_KEY_BUSINESS_METRICS_PAST_DATA = "Request Key business metrics past Data",
  TOGGLE_KEY_BUSINESS_METRICS_PAST_LOADER = "Toggle Key business metrics past loader",
  KEY_BUSINESS_METRICS_PAST_DATA_SUCCESS = "Requested Key business metrics past data fetched successfully",
  KEY_BUSINESS_METRICS_PAST_DATA_FAILED = "Requested Key business metrics past data fetching failed",

  REQUETS_KEY_BUSINESS_METRICS_FUTURE_DATA = "Request Key business metrics FUTURE Data",
  TOGGLE_KEY_BUSINESS_METRICS_FUTURE_LOADER = "Toggle Key business metrics FUTURE loader",
  KEY_BUSINESS_METRICS_FUTURE_DATA_SUCCESS = "Requested Key business metrics FUTURE data fetched successfully",
  KEY_BUSINESS_METRICS_FUTURE_DATA_FAILED = "Requested Key business metrics FUTURE data fetching failed",
}

export const requestKeyBusinessMetricsData = createAction(KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_DATA);
export const toggleKeyBusinessMetricsLoader = createAction(KeyBusinessMetricsActionTypes.TOGGLE_KEY_BUSINESS_METRICS_LOADER);
export const KeyBusinessMetricsDataSuccess = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_DATA_SUCCESS);
export const KeyBusinessMetricsDataFailed = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_DATA_FAILED);
// pAST
export const requestKeyBusinessMetricsPastData = createAction(KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_PAST_DATA);
export const toggleKeyBusinessMetricsPastLoader = createAction(KeyBusinessMetricsActionTypes.TOGGLE_KEY_BUSINESS_METRICS_PAST_LOADER);
export const KeyBusinessMetricsPastDataSuccess = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_PAST_DATA_SUCCESS);
export const KeyBusinessMetricsPastDataFailed = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_PAST_DATA_FAILED);

// fUTURE
export const requestKeyBusinessMetricsFutureData = createAction(KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_FUTURE_DATA);
export const toggleKeyBusinessMetricsFutureLoader = createAction(KeyBusinessMetricsActionTypes.TOGGLE_KEY_BUSINESS_METRICS_FUTURE_LOADER);
export const KeyBusinessMetricFuturesDataSuccess = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_FUTURE_DATA_SUCCESS);
export const KeyBusinessMetricsFutureDataFailed = createAction(KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_FUTURE_DATA_FAILED);
