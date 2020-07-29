import { createAction } from "redux-actions";

export enum LeadTimeYTDSegmentActionTypes {
  REQUETS_KEY_LEAD_TIMES_SEGMENT_DATA = "Request LeadTimeYTDSegment Data",
  TOGGLE_KEY_LEAD_TIMES_SEGMENT_LOADER = "Toggle LeadTimeYTDSegment loader",
  KEY_LEAD_TIMES_SEGMENT_DATA_SUCCESS = "Requested LeadTimeYTDSegment data fetched successfully",
  KEY_LEAD_TIMES_SEGMENT_DATA_FAILED = "Requested LeadTimeYTDSegment data fetching failed",
}

export const requestLeadTimeYTDSegmentData = createAction(LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_DATA);
export const toggleLeadTimeYTDSegmentLoader = createAction(LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_LOADER);
export const LeadTimeYTDSegmentDataSuccess = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_DATA_SUCCESS);
export const LeadTimeYTDSegmentDataFailed = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_DATA_FAILED);
