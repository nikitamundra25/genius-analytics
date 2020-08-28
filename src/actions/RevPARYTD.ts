import { createAction } from "redux-actions";

export enum RevPARYTDActionTypes {
  REQUETS_REV_PARYTD_DATA = "Request RevPARYTD Data",
  TOGGLE_REV_PARYTD_LOADER = "Toggle RevPARYTD loader",
  REV_PARYTD_DATA_SUCCESS = "Requested RevPARYTD data fetched successfully",
  REV_PARYTD_DATA_FAILED = "Requested RevPARYTD data fetching failed",

  REQUETS_REV_PARYTD_PAST_DATA = "Request RevPARYTD past Data",
  TOGGLE_REV_PARYTD_PAST_LOADER = "Toggle RevPARYTD past loader",
  REV_PARYTD_PAST_DATA_SUCCESS = "Requested RevPARYTD past data fetched successfully",
  REV_PARYTD_PAST_DATA_FAILED = "Requested RevPARYTD past data fetching failed",

  REQUETS_REV_PARYTD_FUTURE_DATA = "Request RevPARYTD future Data",
  TOGGLE_REV_PARYTD_FUTURE_LOADER = "Toggle RevPARYTD future loader",
  REV_PARYTD_FUTURE_DATA_SUCCESS = "Requested RevPARYTD future data fetched successfully",
  REV_PARYTD_FUTURE_DATA_FAILED = "Requested RevPARYTD future data fetching failed",
}

export const requestRevPARYTDData = createAction(RevPARYTDActionTypes.REQUETS_REV_PARYTD_DATA);
export const toggleRevPARYTDLoader = createAction(RevPARYTDActionTypes.TOGGLE_REV_PARYTD_LOADER);
export const RevPARYTDDataSuccess = createAction(RevPARYTDActionTypes.REV_PARYTD_DATA_SUCCESS);
export const RevPARYTDDataFailed = createAction(RevPARYTDActionTypes.REV_PARYTD_DATA_FAILED);
// past
export const requestRevPARYTDPastData = createAction(RevPARYTDActionTypes.REQUETS_REV_PARYTD_PAST_DATA);
export const toggleRevPARYTDPastLoader = createAction(RevPARYTDActionTypes.TOGGLE_REV_PARYTD_PAST_LOADER);
export const RevPARYTDPastDataSuccess = createAction(RevPARYTDActionTypes.REV_PARYTD_PAST_DATA_SUCCESS);
export const RevPARYTDPastDataFailed = createAction(RevPARYTDActionTypes.REV_PARYTD_PAST_DATA_FAILED);

// future
export const requestRevPARYTDFutureData = createAction(RevPARYTDActionTypes.REQUETS_REV_PARYTD_FUTURE_DATA);
export const toggleRevPARYTDFutureLoader = createAction(RevPARYTDActionTypes.TOGGLE_REV_PARYTD_FUTURE_LOADER);
export const RevPARYTDFutureDataSuccess = createAction(RevPARYTDActionTypes.REV_PARYTD_FUTURE_DATA_SUCCESS);
export const RevPARYTDFutureDataFailed = createAction(RevPARYTDActionTypes.REV_PARYTD_FUTURE_DATA_FAILED);
