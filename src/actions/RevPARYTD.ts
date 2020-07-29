import { createAction } from "redux-actions";

export enum RevPARYTDActionTypes {
  REQUETS_REV_PARYTD_DATA = "Request RevPARYTD Data",
  TOGGLE_REV_PARYTD_LOADER = "Toggle RevPARYTD loader",
  REV_PARYTD_DATA_SUCCESS = "Requested RevPARYTD data fetched successfully",
  REV_PARYTD_DATA_FAILED = "Requested RevPARYTD data fetching failed",
}

export const requestRevPARYTDData = createAction(RevPARYTDActionTypes.REQUETS_REV_PARYTD_DATA);
export const toggleRevPARYTDLoader = createAction(RevPARYTDActionTypes.TOGGLE_REV_PARYTD_LOADER);
export const RevPARYTDDataSuccess = createAction(RevPARYTDActionTypes.REV_PARYTD_DATA_SUCCESS);
export const RevPARYTDDataFailed = createAction(RevPARYTDActionTypes.REV_PARYTD_DATA_FAILED);
