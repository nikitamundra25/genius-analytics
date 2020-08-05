import { createAction } from "redux-actions";

export enum pickupSummaryTableActionTypes {
  REQUETS_PICKUP_SUMMARY_TABLE_DATA = "Request pickup Summary Table Data",
  TOGGLE_PICKUP_SUMMARY_TABLE_LOADER = "Toggle pickup Summary Table loader",
  PICKUP_SUMMARY_TABLE_DATA_SUCCESS = "Requested pickup Summary Table data fetched successfully",
  PICKUP_SUMMARY_TABLE_DATA_FAILED = "Requested pickup Summary Table data fetching failed",
}

export const requestPickupSummaryTableData = createAction(pickupSummaryTableActionTypes.REQUETS_PICKUP_SUMMARY_TABLE_DATA);
export const togglePickupSummaryTableLoader = createAction(pickupSummaryTableActionTypes.TOGGLE_PICKUP_SUMMARY_TABLE_LOADER);
export const pickupSummaryTableDataSuccess = createAction(pickupSummaryTableActionTypes.PICKUP_SUMMARY_TABLE_DATA_SUCCESS);
export const pickupSummaryTableDataFailed = createAction(pickupSummaryTableActionTypes.PICKUP_SUMMARY_TABLE_DATA_FAILED);
