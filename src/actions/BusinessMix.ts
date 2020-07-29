import { createAction } from "redux-actions";

export enum BusinessMixActionTypes {
  REQUETS_BUSINESS_MIX_DATA = "Request Business Mix Data",
  TOGGLE_BUSINESS_MIX_LOADER = "Toggle Business Mix loader",
  BUSINESS_MIX_DATA_SUCCESS = "Requested Business Mix data fetched successfully",
  BUSINESS_MIX_DATA_FAILED = "Requested Business Mix data fetching failed",
}

export const requestBusinessMixData = createAction(BusinessMixActionTypes.REQUETS_BUSINESS_MIX_DATA);
export const toggleBusinessMixLoader = createAction(BusinessMixActionTypes.TOGGLE_BUSINESS_MIX_LOADER);
export const BusinessMixDataSuccess = createAction(BusinessMixActionTypes.BUSINESS_MIX_DATA_SUCCESS);
export const BusinessMixDataFailed = createAction(BusinessMixActionTypes.BUSINESS_MIX_DATA_FAILED);
