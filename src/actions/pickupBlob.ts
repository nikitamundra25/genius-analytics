import { createAction } from "redux-actions";

export enum PickupBlobActionTypes {
  REQUETS_PICKUP_BLOB = "Request Pickup Blob Data",
  TOGGLE_PICKUP_BLOB_LOADER = "Toggle Pickup Blob loader",
  PICKUP_BLOB_SUCCESS = "Requested Pickup Blob  fetched successfully",
  PICKUP_BLOB_FAILED = "Requested Pickup Blob  fetching failed",

  REQUETS_PICKUP_BLOB_FUTURE_DATA = "Request Pickup Blob Future Data ",
  TOGGLE_PICKUP_BLOB_FUTURE_DATA_LOADER = "Toggle Pickup Blob Future loader",
  PICKUP_BLOB_FUTURE_DATA_SUCCESS = "Requested Pickup Blob Future  fetched successfully",
  PICKUP_BLOB_FUTURE_DATA_FAILED = "Requested Pickup Blob Future fetching failed",

  REQUETS_PICKUP_BLOB_PAST_DATA = "Request Pickup Blob PAST Data ",
  TOGGLE_PICKUP_BLOB_PAST_DATA_LOADER = "Toggle Pickup Blob PAST loader",
  PICKUP_BLOB_PAST_DATA_SUCCESS = "Requested Pickup Blob PAST  fetched successfully",
  PICKUP_BLOB_PAST_DATA_FAILED = "Requested Pickup Blob PAST fetching failed",
}

export const requestPickupBlobData = createAction(PickupBlobActionTypes.REQUETS_PICKUP_BLOB);
export const togglePickupBlobLoader = createAction(PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_LOADER);
export const PickupBlobDataSuccess = createAction(PickupBlobActionTypes.PICKUP_BLOB_SUCCESS);
export const PickupBlobDataFailed = createAction(PickupBlobActionTypes.PICKUP_BLOB_FAILED);

export const requestPickupBlobFutureData = createAction(PickupBlobActionTypes.REQUETS_PICKUP_BLOB_FUTURE_DATA);
export const togglePickupBlobFutureLoader = createAction(PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_FUTURE_DATA_LOADER);
export const PickupBlobFutureDataSuccess = createAction(PickupBlobActionTypes.PICKUP_BLOB_FUTURE_DATA_SUCCESS);
export const PickupBlobFutureDataFailed = createAction(PickupBlobActionTypes.PICKUP_BLOB_FUTURE_DATA_FAILED);


export const requestPickupBlobPastData = createAction(PickupBlobActionTypes.REQUETS_PICKUP_BLOB_PAST_DATA);
export const togglePickupBlobPastLoader = createAction(PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_PAST_DATA_LOADER);
export const PickupBlobPastDataSuccess = createAction(PickupBlobActionTypes.PICKUP_BLOB_PAST_DATA_SUCCESS);
export const PickupBlobPastDataFailed = createAction(PickupBlobActionTypes.PICKUP_BLOB_PAST_DATA_FAILED);