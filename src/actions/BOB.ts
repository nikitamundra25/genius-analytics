import { createAction } from "redux-actions";

export enum BOBActionTypes {
  REQUETS_BOB_DATA = "Request BOB Data",
  TOGGLE_BOB_LOADER = "Toggle BOB loader",
  BOB_DATA_SUCCESS = "Requested BOB data fetched successfully",
  BOB_DATA_FAILED = "Requested BOB data fetching failed",
}

export const requestBOBData = createAction(BOBActionTypes.REQUETS_BOB_DATA);
export const toggleBOBLoader = createAction(BOBActionTypes.TOGGLE_BOB_LOADER);
export const BOBDataSuccess = createAction(BOBActionTypes.BOB_DATA_SUCCESS);
export const BOBDataFailed = createAction(BOBActionTypes.BOB_DATA_FAILED);
