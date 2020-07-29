import { createAction } from "redux-actions";

export enum MonthlyDailyOccupacyActionTypes {
  REQUETS_MONTHLY_DAILY_OCCUPACY_DATA = "Request Monthly Daily Occupacy Data",
  TOGGLE_MONTHLY_DAILY_OCCUPACY_LOADER = "Toggle Monthly Daily Occupacy loader",
  MONTHLY_DAILY_OCCUPACY_DATA_SUCCESS = "Requested Monthly Daily Occupacy data fetched successfully",
  MONTHLY_DAILY_OCCUPACY_DATA_FAILED = "Requested Monthly Daily Occupacy data fetching failed",
}

export const requestMonthlyDailyOccupacyData = createAction(MonthlyDailyOccupacyActionTypes.REQUETS_MONTHLY_DAILY_OCCUPACY_DATA);
export const toggleMonthlyDailyOccupacyLoader = createAction(MonthlyDailyOccupacyActionTypes.TOGGLE_MONTHLY_DAILY_OCCUPACY_LOADER);
export const MonthlyDailyOccupacyDataSuccess = createAction(MonthlyDailyOccupacyActionTypes.MONTHLY_DAILY_OCCUPACY_DATA_SUCCESS);
export const MonthlyDailyOccupacyDataFailed = createAction(MonthlyDailyOccupacyActionTypes.MONTHLY_DAILY_OCCUPACY_DATA_FAILED);
