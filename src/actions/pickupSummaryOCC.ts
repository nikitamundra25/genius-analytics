import { createAction } from "redux-actions";

export enum pickupSummaryOCCDataActionTypes {
  REQUETS_PICKUP_SUMMARY_OCCDATA_DATA = "Request pickup Summary OCCData Data",
  TOGGLE_PICKUP_SUMMARY_OCCDATA_LOADER = "Toggle pickup Summary OCCData loader",
  PICKUP_SUMMARY_OCCDATA_DATA_SUCCESS = "Requested pickup Summary OCCData data fetched successfully",
  PICKUP_SUMMARY_OCCDATA_DATA_FAILED = "Requested pickup Summary OCCData data fetching failed",
}

export const requestPickupSummaryOCCDataData = createAction(
  pickupSummaryOCCDataActionTypes.REQUETS_PICKUP_SUMMARY_OCCDATA_DATA
);
export const togglePickupSummaryOCCDataLoader = createAction(
  pickupSummaryOCCDataActionTypes.TOGGLE_PICKUP_SUMMARY_OCCDATA_LOADER
);
export const pickupSummaryOCCDataDataSuccess = createAction(
  pickupSummaryOCCDataActionTypes.PICKUP_SUMMARY_OCCDATA_DATA_SUCCESS
);
export const pickupSummaryOCCDataDataFailed = createAction(
  pickupSummaryOCCDataActionTypes.PICKUP_SUMMARY_OCCDATA_DATA_FAILED
);
