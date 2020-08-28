import { createAction } from "redux-actions";

export enum LeadTimeYTDSegmentActionTypes {
  REQUETS_KEY_LEAD_TIMES_SEGMENT_DATA = "Request LeadTimeYTDSegment Data",
  TOGGLE_KEY_LEAD_TIMES_SEGMENT_LOADER = "Toggle LeadTimeYTDSegment loader",
  KEY_LEAD_TIMES_SEGMENT_DATA_SUCCESS = "Requested LeadTimeYTDSegment data fetched successfully",
  KEY_LEAD_TIMES_SEGMENT_DATA_FAILED = "Requested LeadTimeYTDSegment data fetching failed",

  REQUETS_KEY_LEAD_TIMES_SEGMENT_PAST_DATA = "Request LeadTimeYTDSegment past Data",
  TOGGLE_KEY_LEAD_TIMES_SEGMENT_PAST_LOADER = "Toggle LeadTimeYTDSegment pastloader",
  KEY_LEAD_TIMES_SEGMENT_PAST_DATA_SUCCESS = "Requested LeadTimeYTDSegment past data fetched successfully",
  KEY_LEAD_TIMES_SEGMENT_PAST_DATA_FAILED = "Requested LeadTimeYTDSegment past data fetching failed",

  REQUETS_KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA = "Request LeadTimeYTDSegment future Data",
  TOGGLE_KEY_LEAD_TIMES_SEGMENT_FUTURE_LOADER = "Toggle LeadTimeYTDSegment future loader",
  KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA_SUCCESS = "Requested LeadTimeYTDSegment future data fetched successfully",
  KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA_FAILED = "Requested LeadTimeYTDSegment future data fetching failed",
}

export const requestLeadTimeYTDSegmentData = createAction(LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_DATA);
export const toggleLeadTimeYTDSegmentLoader = createAction(LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_LOADER);
export const LeadTimeYTDSegmentDataSuccess = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_DATA_SUCCESS);
export const LeadTimeYTDSegmentDataFailed = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_DATA_FAILED);

// past 
export const requestLeadTimeYTDSegmentPastData = createAction(LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_PAST_DATA);
export const toggleLeadTimeYTDSegmentPastLoader = createAction(LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_PAST_LOADER);
export const LeadTimeYTDSegmentPastDataSuccess = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_PAST_DATA_SUCCESS);
export const LeadTimeYTDSegmentPastDataFailed = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_PAST_DATA_FAILED);


// future
export const requestLeadTimeYTDSegmentFutureData = createAction(LeadTimeYTDSegmentActionTypes.REQUETS_KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA);
export const toggleLeadTimeYTDSegmentFutureLoader = createAction(LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_FUTURE_LOADER);
export const LeadTimeYTDSegmentFutureDataSuccess = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA_SUCCESS);
export const LeadTimeYTDSegmentFutureDataFailed = createAction(LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA_FAILED);

