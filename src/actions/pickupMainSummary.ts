import { createAction } from "redux-actions";

export enum pickupMainSummaryActionTypes {
  REQUETS_PICKUP_MAIN_SUMMARY_DATA = "Request pickup main summary Data",
  TOGGLE_PICKUP_MAIN_SUMMARY_LOADER = "Toggle pickup main summary loader",
  PICKUP_MAIN_SUMMARY_DATA_SUCCESS = "Requested pickup main summary data fetched successfully",
  PICKUP_MAIN_SUMMARY_DATA_FAILED = "Requested pickup main summary data fetching failed",
}

export const requestPickupMainSummaryData = createAction(
  pickupMainSummaryActionTypes.REQUETS_PICKUP_MAIN_SUMMARY_DATA
);
export const togglePickupMainSummaryLoader = createAction(
  pickupMainSummaryActionTypes.TOGGLE_PICKUP_MAIN_SUMMARY_LOADER
);
export const pickupMainSummaryDataSuccess = createAction(
  pickupMainSummaryActionTypes.PICKUP_MAIN_SUMMARY_DATA_SUCCESS
);
export const pickupMainSummaryDataFailed = createAction(
  pickupMainSummaryActionTypes.PICKUP_MAIN_SUMMARY_DATA_FAILED
);
