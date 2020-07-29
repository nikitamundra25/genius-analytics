import { createAction } from "redux-actions";

export enum GeographicOriginActionTypes {
  REQUETS_GEOGRAPHIC_ORIGIN_DATA = "Request Geographic origin Data",
  TOGGLE_GEOGRAPHIC_ORIGIN_LOADER = "Toggle Geographic origin loader",
  GEOGRAPHIC_ORIGIN_DATA_SUCCESS = "Requested Geographic origin data fetched successfully",
  GEOGRAPHIC_ORIGIN_DATA_FAILED = "Requested Geographic origin data fetching failed",
}

export const requestGeographicOriginData = createAction(GeographicOriginActionTypes.REQUETS_GEOGRAPHIC_ORIGIN_DATA);
export const toggleGeographicOriginLoader = createAction(GeographicOriginActionTypes.TOGGLE_GEOGRAPHIC_ORIGIN_LOADER);
export const GeographicOriginDataSuccess = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_DATA_SUCCESS);
export const GeographicOriginDataFailed = createAction(GeographicOriginActionTypes.GEOGRAPHIC_ORIGIN_DATA_FAILED);
