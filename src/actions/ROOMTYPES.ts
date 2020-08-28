import { createAction } from "redux-actions";

export enum ROOMTYPESActionTypes {
  REQUETS_ROOMTYPES_DATA = "Request ROOMTYPES Data",
  TOGGLE_ROOMTYPES_LOADER = "Toggle ROOMTYPES loader",
  ROOMTYPES_DATA_SUCCESS = "Requested ROOMTYPES data fetched successfully",
  ROOMTYPES_DATA_FAILED = "Requested ROOMTYPES data fetching failed",

  REQUETS_ROOMTYPES_PAST_DATA = "Request ROOMTYPES past Data",
  TOGGLE_ROOMTYPES_PAST_LOADER = "Toggle ROOMTYPES past loader",
  ROOMTYPES_PAST_DATA_SUCCESS = "Requested ROOMTYPES past data fetched successfully",
  ROOMTYPES_PAST_DATA_FAILED = "Requested ROOMTYPES past data fetching failed",

  REQUETS_ROOMTYPES_FUTURE_DATA = "Request ROOMTYPES future Data",
  TOGGLE_ROOMTYPES_FUTURE_LOADER = "Toggle ROOMTYPES future loader",
  ROOMTYPES_FUTURE_DATA_SUCCESS = "Requested ROOMTYPES future data fetched successfully",
  ROOMTYPES_FUTURE_DATA_FAILED = "Requested ROOMTYPES future data fetching failed",
}

export const requestROOMTYPESData = createAction(ROOMTYPESActionTypes.REQUETS_ROOMTYPES_DATA);
export const toggleROOMTYPESLoader = createAction(ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_LOADER);
export const ROOMTYPESDataSuccess = createAction(ROOMTYPESActionTypes.ROOMTYPES_DATA_SUCCESS);
export const ROOMTYPESDataFailed = createAction(ROOMTYPESActionTypes.ROOMTYPES_DATA_FAILED);

// PAST
export const requestROOMTYPESPastData = createAction(ROOMTYPESActionTypes.REQUETS_ROOMTYPES_PAST_DATA);
export const toggleROOMTYPESPastLoader = createAction(ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_PAST_LOADER);
export const ROOMTYPESPastDataSuccess = createAction(ROOMTYPESActionTypes.ROOMTYPES_PAST_DATA_SUCCESS);
export const ROOMTYPESPastDataFailed = createAction(ROOMTYPESActionTypes.ROOMTYPES_PAST_DATA_FAILED);


// FUTURE
export const requestROOMTYPESFutureData = createAction(ROOMTYPESActionTypes.REQUETS_ROOMTYPES_FUTURE_DATA);
export const toggleROOMTYPESFutureLoader = createAction(ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_FUTURE_LOADER);
export const ROOMTYPESFutureDataSuccess = createAction(ROOMTYPESActionTypes.ROOMTYPES_FUTURE_DATA_SUCCESS);
export const ROOMTYPESFutureDataFailed = createAction(ROOMTYPESActionTypes.ROOMTYPES_FUTURE_DATA_FAILED);