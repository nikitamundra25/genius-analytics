import { createAction } from "redux-actions";

export enum BusinessMixActionTypes {
  REQUETS_BUSINESS_MIX_DATA = "Request Business Mix Data",
  TOGGLE_BUSINESS_MIX_LOADER = "Toggle Business Mix loader",
  BUSINESS_MIX_DATA_SUCCESS = "Requested Business Mix data fetched successfully",
  BUSINESS_MIX_DATA_FAILED = "Requested Business Mix data fetching failed",

  REQUETS_BUSINESS_MIX_PAST_DATA = "Request Business Mix past Data",
  TOGGLE_BUSINESS_MIX_PAST_LOADER = "Toggle Business Mix past loader",
  BUSINESS_MIX_PAST_DATA_SUCCESS = "Requested Business Mix past data fetched successfully",
  BUSINESS_MIX_PAST_DATA_FAILED = "Requested Business Mix past data fetching failed",

  REQUETS_BUSINESS_MIX_FUTURE_DATA = "Request Business Mix future Data",
  TOGGLE_BUSINESS_MIX_FUTURE_LOADER = "Toggle Business Mix future loader",
  BUSINESS_MIX_FUTURE_DATA_SUCCESS = "Requested Business Mix future data fetched successfully",
  BUSINESS_MIX_FUTURE_DATA_FAILED = "Requested Business Mix future data fetching failed",
}

export const requestBusinessMixData = createAction(BusinessMixActionTypes.REQUETS_BUSINESS_MIX_DATA);
export const toggleBusinessMixLoader = createAction(BusinessMixActionTypes.TOGGLE_BUSINESS_MIX_LOADER);
export const BusinessMixDataSuccess = createAction(BusinessMixActionTypes.BUSINESS_MIX_DATA_SUCCESS);
export const BusinessMixDataFailed = createAction(BusinessMixActionTypes.BUSINESS_MIX_DATA_FAILED);

// Past
export const requestBusinessMixPastData = createAction(BusinessMixActionTypes.REQUETS_BUSINESS_MIX_PAST_DATA);
export const toggleBusinessMixPastLoader = createAction(BusinessMixActionTypes.TOGGLE_BUSINESS_MIX_PAST_LOADER);
export const BusinessMixPastDataSuccess = createAction(BusinessMixActionTypes.BUSINESS_MIX_PAST_DATA_SUCCESS);
export const BusinessMixPastDataFailed = createAction(BusinessMixActionTypes.BUSINESS_MIX_PAST_DATA_FAILED);

// Future
export const requestBusinessMixFutureData = createAction(BusinessMixActionTypes.REQUETS_BUSINESS_MIX_FUTURE_DATA);
export const toggleBusinessMixFutureLoader = createAction(BusinessMixActionTypes.TOGGLE_BUSINESS_MIX_FUTURE_LOADER);
export const BusinessMixFutureDataSuccess = createAction(BusinessMixActionTypes.BUSINESS_MIX_FUTURE_DATA_SUCCESS);
export const BusinessMixFutureDataFailed = createAction(BusinessMixActionTypes.BUSINESS_MIX_FUTURE_DATA_FAILED);
