import { createAction } from "redux-actions";

export enum GeographicOriginActionTypes {
  REQUETS_GEOGRAPHIC_ORIGIN_DATA = "Request Geographic origin Data",
  TOGGLE_GEOGRAPHIC_ORIGIN_LOADER = "Toggle Geographic origin loader",
  GEOGRAPHIC_ORIGIN_DATA_SUCCESS = "Requested Geographic origin data fetched successfully",
  GEOGRAPHIC_ORIGIN_DATA_FAILED = "Requested Geographic origin data fetching failed",

  REQUETS_GEOGRAPHIC_ORIGIN_PAST_DATA = "Request Geographic origin past Data",
  TOGGLE_GEOGRAPHIC_ORIGIN_PAST_LOADER = "Toggle Geographic origin past loader",
  GEOGRAPHIC_ORIGIN_PAST_DATA_SUCCESS = "Requested Geographic origin past data fetched successfully",
  GEOGRAPHIC_ORIGIN_PAST_DATA_FAILED = "Requested Geographic origin past data fetching failed",

  REQUETS_GEOGRAPHIC_ORIGIN_FUTURE_DATA = "Request Geographic origin future Data",
  TOGGLE_GEOGRAPHIC_ORIGIN_FUTURE_LOADER = "Toggle Geographic origin future loader",
  GEOGRAPHIC_ORIGIN_FUTURE_DATA_SUCCESS = "Requested Geographic origin future data fetched successfully",
  GEOGRAPHIC_ORIGIN_FUTURE_DATA_FAILED = "Requested Geographic origin future data fetching failed",
}

export const requestGeographicOriginData = createAction(GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_DATA);
export const toggleGeographicOriginLoader = createAction(GeographicOriginActionTypes.TOGGLE_GEOGRAPHIC_ORIGIN_LOADER);
export const GeographicOriginDataSuccess = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_DATA_SUCCESS);
export const GeographicOriginDataFailed = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_DATA_FAILED);

//  past
export const requestGeographicOriginPastData = createAction(GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_PAST_DATA);
export const toggleGeographicOriginPastLoader = createAction(GeographicOriginActionTypes.TOGGLE_GEOGRAPHIC_ORIGIN_PAST_LOADER);
export const GeographicOriginPastDataSuccess = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_PAST_DATA_SUCCESS);
export const GeographicOriginPastDataFailed = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_PAST_DATA_FAILED);

//  future
export const requestGeographicOriginFutureData = createAction(GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_FUTURE_DATA);
export const toggleGeographicOriginFutureLoader = createAction(GeographicOriginActionTypes.TOGGLE_GEOGRAPHIC_ORIGIN_FUTURE_LOADER);
export const GeographicOriginFutureDataSuccess = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_FUTURE_DATA_SUCCESS);
export const GeographicOriginFutureDataFailed = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_FUTURE_DATA_FAILED);