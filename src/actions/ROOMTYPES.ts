import { createAction } from "redux-actions";

export enum ROOMTYPESActionTypes {
  REQUETS_ROOMTYPES_DATA = "Request ROOMTYPES Data",
  TOGGLE_ROOMTYPES_LOADER = "Toggle ROOMTYPES loader",
  ROOMTYPES_DATA_SUCCESS = "Requested ROOMTYPES data fetched successfully",
  ROOMTYPES_DATA_FAILED = "Requested ROOMTYPES data fetching failed",
}

export const requestROOMTYPESData = createAction(ROOMTYPESActionTypes.REQUETS_ROOMTYPES_DATA);
export const toggleROOMTYPESLoader = createAction(ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_LOADER);
export const ROOMTYPESDataSuccess = createAction(ROOMTYPESActionTypes.ROOMTYPES_DATA_SUCCESS);
export const ROOMTYPESDataFailed = createAction(ROOMTYPESActionTypes.ROOMTYPES_DATA_FAILED);
