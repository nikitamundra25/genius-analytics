import { createAction } from "redux-actions";

export enum OccupacyStaticsActionTypes {
  REQUETS_OCCUPACY_STATICS_DATA = "Request occupacy statics Data",
  TOGGLE_OCCUPACY_STATICS_LOADER = "Toggle occupacy statics loader",
  OCCUPACY_STATICS_DATA_SUCCESS = "Requested occupacy statics data fetched successfully",
  OCCUPACY_STATICS_DATA_FAILED = "Requested occupacy statics data fetching failed",

  REQUETS_OCCUPACY_STATICS_PAST_DATA = "Request occupacy statics past Data",
  TOGGLE_OCCUPACY_STATICS_PAST_LOADER = "Toggle occupacy statics past loader",
  OCCUPACY_STATICS_PAST_DATA_SUCCESS = "Requested occupacy statics past data fetched successfully",
  OCCUPACY_STATICS_PAST_DATA_FAILED = "Requested occupacy statics past data fetching failed",

  REQUETS_OCCUPACY_STATICS_FUTURE_DATA = "Request occupacy statics future Data",
  TOGGLE_OCCUPACY_STATICS_FUTURE_LOADER = "Toggle occupacy statics future loader",
  OCCUPACY_STATICS_FUTURE_DATA_SUCCESS = "Requested occupacy statics future data fetched successfully",
  OCCUPACY_STATICS_FUTURE_DATA_FAILED = "Requested occupacy statics future data fetching failed",
}

export const requestOccupacyStaticsData = createAction(OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_DATA);
export const toggleOccupacyStaticsLoader = createAction(OccupacyStaticsActionTypes.TOGGLE_OCCUPACY_STATICS_LOADER);
export const OccupacyStaticsDataSuccess = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_DATA_SUCCESS);
export const OccupacyStaticsDataFailed = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_DATA_FAILED);


//  Past
export const requestOccupacyStaticsPastData = createAction(OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_PAST_DATA);
export const toggleOccupacyStaticsPastLoader = createAction(OccupacyStaticsActionTypes.TOGGLE_OCCUPACY_STATICS_PAST_LOADER);
export const OccupacyStaticsPastDataSuccess = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_PAST_DATA_SUCCESS);
export const OccupacyStaticsPastDataFailed = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_PAST_DATA_FAILED);

//  Future
export const requestOccupacyStaticsFutureData = createAction(OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_FUTURE_DATA);
export const toggleOccupacyStaticsFutureLoader = createAction(OccupacyStaticsActionTypes.TOGGLE_OCCUPACY_STATICS_FUTURE_LOADER);
export const OccupacyStaticsFutureDataSuccess = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_FUTURE_DATA_SUCCESS);
export const OccupacyStaticsFutureDataFailed = createAction(OccupacyStaticsActionTypes.OCCUPACY_STATICS_FUTURE_DATA_FAILED);