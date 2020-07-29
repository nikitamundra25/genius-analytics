import { createAction } from "redux-actions";

export enum pickupSummaryDowDataActionTypes {
  REQUETS_PICKUP_SUMMARY_DOWDATA_DATA = "Request pickup Summary DowData Data",
  TOGGLE_PICKUP_SUMMARY_DOWDATA_LOADER = "Toggle pickup Summary DowData loader",
  PICKUP_SUMMARY_DOWDATA_DATA_SUCCESS = "Requested pickup Summary DowData data fetched successfully",
  PICKUP_SUMMARY_DOWDATA_DATA_FAILED = "Requested pickup Summary DowData data fetching failed",
}

export const requestPickupSummaryDowDataData = createAction(pickupSummaryDowDataActionTypes.REQUETS_PICKUP_SUMMARY_DOWDATA_DATA);
export const togglePickupSummaryDowDataLoader = createAction(pickupSummaryDowDataActionTypes.TOGGLE_PICKUP_SUMMARY_DOWDATA_LOADER);
export const pickupSummaryDowDataDataSuccess = createAction(pickupSummaryDowDataActionTypes.PICKUP_SUMMARY_DOWDATA_DATA_SUCCESS);
export const pickupSummaryDowDataDataFailed = createAction(pickupSummaryDowDataActionTypes.PICKUP_SUMMARY_DOWDATA_DATA_FAILED);
