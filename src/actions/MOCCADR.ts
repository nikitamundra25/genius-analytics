import { createAction } from "redux-actions";

export enum MOCCADRActionTypes {
  REQUETS_MOCCADR_DATA = "Request MOCCADR Data",
  TOGGLE_MOCCADR_LOADER = "Toggle MOCCADR loader",
  MOCCADR_DATA_SUCCESS = "Requested MOCCADR data fetched successfully",
  MOCCADR_DATA_FAILED = "Requested MOCCADR data fetching failed",

  REQUETS_MOCCADR_PAST_DATA = "Request MOCCADR past Data",
  TOGGLE_MOCCADR_PAST_LOADER = "Toggle MOCCADR past loader",
  MOCCADR_PAST_DATA_SUCCESS = "Requested MOCCADR past data fetched successfully",
  MOCCADR_PAST_DATA_FAILED = "Requested MOCCADR past data fetching failed",

  REQUETS_MOCCADR_FUTURE_DATA = "Request MOCCADR future Data",
  TOGGLE_MOCCADR_FUTURE_LOADER = "Toggle MOCCADR future loader",
  MOCCADR_FUTURE_DATA_SUCCESS = "Requested MOCCADR future  data fetched successfully",
  MOCCADR_FUTURE_DATA_FAILED = "Requested MOCCADR future data fetching failed",
}

export const requestMOCCADRData = createAction(MOCCADRActionTypes.REQUETS_MOCCADR_DATA);
export const toggleMOCCADRLoader = createAction(MOCCADRActionTypes.TOGGLE_MOCCADR_LOADER);
export const MOCCADRDataSuccess = createAction(MOCCADRActionTypes.MOCCADR_DATA_SUCCESS);
export const MOCCADRDataFailed = createAction(MOCCADRActionTypes.MOCCADR_DATA_FAILED);

// past

export const requestMOCCADRPastData = createAction(MOCCADRActionTypes.REQUETS_MOCCADR_PAST_DATA);
export const toggleMOCCADRPastLoader = createAction(MOCCADRActionTypes.TOGGLE_MOCCADR_PAST_LOADER);
export const MOCCADRPastDataSuccess = createAction(MOCCADRActionTypes.MOCCADR_PAST_DATA_SUCCESS);
export const MOCCADRPastDataFailed = createAction(MOCCADRActionTypes.MOCCADR_PAST_DATA_FAILED);

// future

export const requestMOCCADRFutureData = createAction(MOCCADRActionTypes.REQUETS_MOCCADR_FUTURE_DATA);
export const toggleMOCCADRFutureLoader = createAction(MOCCADRActionTypes.TOGGLE_MOCCADR_FUTURE_LOADER);
export const MOCCADRFutureDataSuccess = createAction(MOCCADRActionTypes.MOCCADR_FUTURE_DATA_SUCCESS);
export const MOCCADRFutureDataFailed = createAction(MOCCADRActionTypes.MOCCADR_FUTURE_DATA_FAILED);