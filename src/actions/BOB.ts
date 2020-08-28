import { createAction } from "redux-actions";

export enum BOBActionTypes {
  REQUETS_BOB_DATA = "Request BOB Data",
  TOGGLE_BOB_LOADER = "Toggle BOB loader",
  BOB_DATA_SUCCESS = "Requested BOB data fetched successfully",
  BOB_DATA_FAILED = "Requested BOB data fetching failed",

  REQUETS_BOB_PAST_DATA = "Request BOB Past Data",
  TOGGLE_BOB_PAST_LOADER = "Toggle BOB Past loader",
  BOB_DATA_PAST_SUCCESS = "Requested BOB Past data fetched successfully",
  BOB_DATA_PAST_FAILED = "Requested BOB Past data fetching failed",

  REQUETS_BOB_FUTURE_DATA = "Request BOB Future Data",
  TOGGLE_BOB_FUTURE_LOADER = "Toggle BOB Future loader",
  BOB_DATA_FUTURE_SUCCESS = "Requested BOB Future data fetched successfully",
  BOB_DATA_FUTURE_FAILED = "Requested BOB Future data fetching failed",
}

export const requestBOBData = createAction(BOBActionTypes.REQUETS_BOB_DATA);
export const toggleBOBLoader = createAction(BOBActionTypes.TOGGLE_BOB_LOADER);
export const BOBDataSuccess = createAction(BOBActionTypes.BOB_DATA_SUCCESS);
export const BOBDataFailed = createAction(BOBActionTypes.BOB_DATA_FAILED);

export const requestBOBPastData = createAction(BOBActionTypes.REQUETS_BOB_PAST_DATA);
export const toggleBOBPastLoader = createAction(BOBActionTypes.TOGGLE_BOB_PAST_LOADER);
export const BOBPastDataSuccess = createAction(BOBActionTypes.BOB_DATA_PAST_SUCCESS);
export const BOBPastDataFailed = createAction(BOBActionTypes.BOB_DATA_PAST_FAILED);

export const requestBOBFutureData = createAction(BOBActionTypes.REQUETS_BOB_FUTURE_DATA);
export const toggleBOBFutureLoader = createAction(BOBActionTypes.TOGGLE_BOB_FUTURE_LOADER);
export const BOBFutureDataSuccess = createAction(BOBActionTypes.BOB_DATA_FUTURE_SUCCESS);
export const BOBFutureDataFailed = createAction(BOBActionTypes.BOB_DATA_FUTURE_FAILED);