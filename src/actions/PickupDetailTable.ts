import { createAction } from "redux-actions";

export enum PickupDetailTableActionTypes {
  REQUETS_PICKUP_DETAIL_TABLE = "Request Pickup Detail Table Data",
  TOGGLE_PICKUP_DETAIL_TABLE_LOADER = "Toggle Pickup Detail Table loader",
  PICKUP_DETAIL_TABLE_SUCCESS = "Requested Pickup Detail Table  fetched successfully",
  PICKUP_DETAIL_TABLE_FAILED = "Requested Pickup Detail Table  fetching failed",
}

export const requestPickupDetailTableData = createAction(PickupDetailTableActionTypes.REQUETS_PICKUP_DETAIL_TABLE);
export const togglePickupDetailTableLoader = createAction(PickupDetailTableActionTypes.TOGGLE_PICKUP_DETAIL_TABLE_LOADER);
export const PickupDetailTableDataSuccess = createAction(PickupDetailTableActionTypes.PICKUP_DETAIL_TABLE_SUCCESS);
export const PickupDetailTableDataFailed = createAction(PickupDetailTableActionTypes.PICKUP_DETAIL_TABLE_FAILED);
