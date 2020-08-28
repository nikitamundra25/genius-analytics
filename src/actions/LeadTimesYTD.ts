import { createAction } from "redux-actions";

export enum KeyLeadTimesYTDActionTypes {
  REQUETS_KEY_LEAD_TIMES_DATA = "Request LeadTimesYTD Data",
  TOGGLE_KEY_LEAD_TIMES_LOADER = "Toggle LeadTimesYTD loader",
  KEY_LEAD_TIMES_DATA_SUCCESS = "Requested LeadTimesYTD data fetched successfully",
  KEY_LEAD_TIMES_DATA_FAILED = "Requested LeadTimesYTD data fetching failed",

  REQUETS_KEY_LEAD_TIMES_PAST_DATA = "Request LeadTimesYTD past Data",
  TOGGLE_KEY_LEAD_TIMES_PAST_LOADER = "Toggle LeadTimesYTD past loader",
  KEY_LEAD_TIMES_PAST_DATA_SUCCESS = "Requested LeadTimesYTD past data fetched successfully",
  KEY_LEAD_TIMES_PAST_DATA_FAILED = "Requested LeadTimesYTD past data fetching failed",

  REQUETS_KEY_LEAD_TIMES_FUTURE_DATA = "Request LeadTimesYTD future Data",
  TOGGLE_KEY_LEAD_TIMES_FUTURE_LOADER = "Toggle LeadTimesYTD future loader",
  KEY_LEAD_TIMES_FUTURE_DATA_SUCCESS = "Requested LeadTimesYTD future data fetched successfully",
  KEY_LEAD_TIMES_FUTURE_DATA_FAILED = "Requested LeadTimesYTD future data fetching failed",
}

export const requestKeyLeadTimesYTDData = createAction(KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_DATA);
export const toggleKeyLeadTimesYTDLoader = createAction(KeyLeadTimesYTDActionTypes.TOGGLE_KEY_LEAD_TIMES_LOADER);
export const KeyLeadTimesYTDDataSuccess = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_DATA_SUCCESS);
export const KeyLeadTimesYTDDataFailed = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_DATA_FAILED);

// past
export const requestKeyLeadTimesYTDPastData = createAction(KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_PAST_DATA);
export const toggleKeyLeadTimesYTDPastLoader = createAction(KeyLeadTimesYTDActionTypes.TOGGLE_KEY_LEAD_TIMES_PAST_LOADER);
export const KeyLeadTimesYTDPastDataSuccess = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_PAST_DATA_SUCCESS);
export const KeyLeadTimesYTDPastDataFailed = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_PAST_DATA_FAILED);

// future
export const requestKeyLeadTimesYTDFutureData = createAction(KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_FUTURE_DATA);
export const toggleKeyLeadTimesYTDFutureLoader = createAction(KeyLeadTimesYTDActionTypes.TOGGLE_KEY_LEAD_TIMES_FUTURE_LOADER);
export const KeyLeadTimesYTDFutureDataSuccess = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_FUTURE_DATA_SUCCESS);
export const KeyLeadTimesYTDFutureDataFailed = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_FUTURE_DATA_FAILED);