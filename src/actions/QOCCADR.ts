import { createAction } from "redux-actions";

export enum QOCCADRActionTypes {
  REQUETS_QOCCADR_DATA = "Request QOCCADR Data",
  TOGGLE_QOCCADR_LOADER = "Toggle QOCCADR loader",
  QOCCADR_DATA_SUCCESS = "Requested QOCCADR data fetched successfully",
  QOCCADR_DATA_FAILED = "Requested QOCCADR data fetching failed",

  REQUETS_QOCCADR_PAST_DATA = "Request QOCCADR past Data",
  TOGGLE_QOCCADR_PAST_LOADER = "Toggle QOCCADR past loader",
  QOCCADR_PAST_DATA_SUCCESS = "Requested QOCCADR past data fetched successfully",
  QOCCADR_PAST_DATA_FAILED = "Requested QOCCADR past data fetching failed",

  REQUETS_QOCCADR_FUTURE_DATA = "Request QOCCADR future Data",
  TOGGLE_QOCCADR_FUTURE_LOADER = "Toggle QOCCADR future loader",
  QOCCADR_FUTURE_DATA_SUCCESS = "Requested QOCCADR future data fetched successfully",
  QOCCADR_FUTURE_DATA_FAILED = "Requested QOCCADR future data fetching failed",
}

export const requestQOCCADRData = createAction(QOCCADRActionTypes.REQUETS_QOCCADR_DATA);
export const toggleQOCCADRLoader = createAction(QOCCADRActionTypes.TOGGLE_QOCCADR_LOADER);
export const QOCCADRDataSuccess = createAction(QOCCADRActionTypes.QOCCADR_DATA_SUCCESS);
export const QOCCADRDataFailed = createAction(QOCCADRActionTypes.QOCCADR_DATA_FAILED);

// PAST 
export const requestQOCCADRPastData = createAction(QOCCADRActionTypes.REQUETS_QOCCADR_PAST_DATA);
export const toggleQOCCADRPastLoader = createAction(QOCCADRActionTypes.TOGGLE_QOCCADR_PAST_LOADER);
export const QOCCADRPastDataSuccess = createAction(QOCCADRActionTypes.QOCCADR_PAST_DATA_SUCCESS);
export const QOCCADRPastDataFailed = createAction(QOCCADRActionTypes.QOCCADR_PAST_DATA_FAILED);

// FUTURE
export const requestQOCCADRFutureData = createAction(QOCCADRActionTypes.REQUETS_QOCCADR_FUTURE_DATA);
export const toggleQOCCADRFutureLoader = createAction(QOCCADRActionTypes.TOGGLE_QOCCADR_FUTURE_LOADER);
export const QOCCADRFutureDataSuccess = createAction(QOCCADRActionTypes.QOCCADR_FUTURE_DATA_SUCCESS);
export const QOCCADRFutureDataFailed = createAction(QOCCADRActionTypes.QOCCADR_FUTURE_DATA_FAILED);