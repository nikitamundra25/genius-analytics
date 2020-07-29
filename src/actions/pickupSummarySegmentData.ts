import { createAction } from "redux-actions";

export enum pickupSummarySegmentDataActionTypes {
  REQUETS_PICKUP_SUMMARY_SEGMENT_DATA_DATA = "Request pickup Summary SegmentData Data",
  TOGGLE_PICKUP_SUMMARY_SEGMENT_DATA_LOADER = "Toggle pickup Summary SegmentData loader",
  PICKUP_SUMMARY_SEGMENT_DATA_DATA_SUCCESS = "Requested pickup Summary SegmentData data fetched successfully",
  PICKUP_SUMMARY_SEGMENT_DATA_DATA_FAILED = "Requested pickup Summary SegmentData data fetching failed",
}

export const requestPickupSummarySegmentData = createAction(pickupSummarySegmentDataActionTypes.REQUETS_PICKUP_SUMMARY_SEGMENT_DATA_DATA);
export const togglePickupSummarySegmentDataLoader = createAction(pickupSummarySegmentDataActionTypes.TOGGLE_PICKUP_SUMMARY_SEGMENT_DATA_LOADER);
export const pickupSummarySegmentDataDataSuccess = createAction(pickupSummarySegmentDataActionTypes.PICKUP_SUMMARY_SEGMENT_DATA_DATA_SUCCESS);
export const pickupSummarySegmentDataDataFailed = createAction(pickupSummarySegmentDataActionTypes.PICKUP_SUMMARY_SEGMENT_DATA_DATA_FAILED);
