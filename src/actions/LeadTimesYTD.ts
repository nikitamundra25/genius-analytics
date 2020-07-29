import { createAction } from "redux-actions";

export enum KeyLeadTimesYTDActionTypes {
  REQUETS_KEY_LEAD_TIMES_DATA = "Request LeadTimesYTD Data",
  TOGGLE_KEY_LEAD_TIMES_LOADER = "Toggle LeadTimesYTD loader",
  KEY_LEAD_TIMES_DATA_SUCCESS = "Requested LeadTimesYTD data fetched successfully",
  KEY_LEAD_TIMES_DATA_FAILED = "Requested LeadTimesYTD data fetching failed",
}

export const requestKeyLeadTimesYTDData = createAction(KeyLeadTimesYTDActionTypes.REQUETS_KEY_LEAD_TIMES_DATA);
export const toggleKeyLeadTimesYTDLoader = createAction(KeyLeadTimesYTDActionTypes.TOGGLE_KEY_LEAD_TIMES_LOADER);
export const KeyLeadTimesYTDDataSuccess = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_DATA_SUCCESS);
export const KeyLeadTimesYTDDataFailed = createAction(KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_DATA_FAILED);
