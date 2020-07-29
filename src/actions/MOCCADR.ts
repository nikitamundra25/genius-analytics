import { createAction } from "redux-actions";

export enum MOCCADRActionTypes {
  REQUETS_MOCCADR_DATA = "Request MOCCADR Data",
  TOGGLE_MOCCADR_LOADER = "Toggle MOCCADR loader",
  MOCCADR_DATA_SUCCESS = "Requested MOCCADR data fetched successfully",
  MOCCADR_DATA_FAILED = "Requested MOCCADR data fetching failed",
}

export const requestMOCCADRData = createAction(MOCCADRActionTypes.REQUETS_MOCCADR_DATA);
export const toggleMOCCADRLoader = createAction(MOCCADRActionTypes.TOGGLE_MOCCADR_LOADER);
export const MOCCADRDataSuccess = createAction(MOCCADRActionTypes.MOCCADR_DATA_SUCCESS);
export const MOCCADRDataFailed = createAction(MOCCADRActionTypes.MOCCADR_DATA_FAILED);
