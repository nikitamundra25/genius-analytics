import { createAction } from "redux-actions";

export enum OccupacyStaticsActionTypes {
  REQUETS_OCCUPACY_STATICS_DATA = "Request occupacy statics Data",
  TOGGLE_OCCUPACY_STATICS_LOADER = "Toggle occupacy statics loader",
  OCCUPACY_STATICS_DATA_SUCCESS = "Requested occupacy statics data fetched successfully",
  OCCUPACY_STATICS_DATA_FAILED = "Requested occupacy statics data fetching failed",
}

export const requestOccupacyStaticsData = createAction(OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_DATA);
export const toggleOccupacyStaticsLoader = createAction(OccupacyStaticsActionTypes.TOGGLE_OCCUPACY_STATICS_LOADER);
export const OccupacyStaticsDataSuccess = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_DATA_SUCCESS);
export const OccupacyStaticsDataFailed = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_DATA_FAILED);
