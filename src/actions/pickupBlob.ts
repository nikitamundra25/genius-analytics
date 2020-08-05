import { createAction } from "redux-actions";

export enum PickupBlobActionTypes {
  REQUETS_PICKUP_BLOB = "Request Pickup Blob Data",
  TOGGLE_PICKUP_BLOB_LOADER = "Toggle Pickup Blob loader",
  PICKUP_BLOB_SUCCESS = "Requested Pickup Blob  fetched successfully",
  PICKUP_BLOB_FAILED = "Requested Pickup Blob  fetching failed",
}

export const requestPickupBlobData = createAction(PickupBlobActionTypes.REQUETS_PICKUP_BLOB);
export const togglePickupBlobLoader = createAction(PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_LOADER);
export const PickupBlobDataSuccess = createAction(PickupBlobActionTypes.PICKUP_BLOB_SUCCESS);
export const PickupBlobDataFailed = createAction(PickupBlobActionTypes.PICKUP_BLOB_FAILED);
