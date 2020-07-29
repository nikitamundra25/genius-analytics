import { createAction } from "redux-actions";

export enum QOCCADRActionTypes {
  REQUETS_QOCCADR_DATA = "Request QOCCADR Data",
  TOGGLE_QOCCADR_LOADER = "Toggle QOCCADR loader",
  QOCCADR_DATA_SUCCESS = "Requested QOCCADR data fetched successfully",
  QOCCADR_DATA_FAILED = "Requested QOCCADR data fetching failed",
}

export const requestQOCCADRData = createAction(QOCCADRActionTypes.REQUETS_QOCCADR_DATA);
export const toggleQOCCADRLoader = createAction(QOCCADRActionTypes.TOGGLE_QOCCADR_LOADER);
export const QOCCADRDataSuccess = createAction(QOCCADRActionTypes.QOCCADR_DATA_SUCCESS);
export const QOCCADRDataFailed = createAction(QOCCADRActionTypes.QOCCADR_DATA_FAILED);
