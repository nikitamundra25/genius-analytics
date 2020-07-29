import { createAction } from "redux-actions";

export enum DailyOccupacyBudLyActionTypes {
  REQUETS_DAILY_OCCUPACY_BUD_LY_DATA = "Request Daily Occupacy Bud Ly Data",
  TOGGLE_DAILY_OCCUPACY_BUD_LY_LOADER = "Toggle Daily Occupacy Bud Ly loader",
  DAILY_OCCUPACY_BUD_LY_DATA_SUCCESS = "Requested Daily Occupacy Bud Ly data fetched successfully",
  DAILY_OCCUPACY_BUD_LY_DATA_FAILED = "Requested Daily Occupacy Bud Ly data fetching failed",
}

export const requestDailyOccupacyBudLyData = createAction(DailyOccupacyBudLyActionTypes.REQUETS_DAILY_OCCUPACY_BUD_LY_DATA);
export const toggleDailyOccupacyBudLyLoader = createAction(DailyOccupacyBudLyActionTypes.TOGGLE_DAILY_OCCUPACY_BUD_LY_LOADER);
export const DailyOccupacyBudLyDataSuccess = createAction(DailyOccupacyBudLyActionTypes.DAILY_OCCUPACY_BUD_LY_DATA_SUCCESS);
export const DailyOccupacyBudLyDataFailed = createAction(DailyOccupacyBudLyActionTypes.DAILY_OCCUPACY_BUD_LY_DATA_FAILED);
