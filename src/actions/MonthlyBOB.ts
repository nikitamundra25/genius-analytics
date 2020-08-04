import { createAction } from "redux-actions";

export enum MonthlyBOBActionTypes {
  REQUETS_MONTHLY_BOB_DATA = "Request Monthly BOB Data",
  TOGGLE_MONTHLY_BOB_LOADER = "Toggle Monthly BOB loader",
  MONTHLY_BOB_DATA_SUCCESS = "Requested Monthly BOB data fetched successfully",
  MONTHLY_BOB_DATA_FAILED = "Requested Monthly BOB data fetching failed",
}

export const requestMonthlyBOBData = createAction(MonthlyBOBActionTypes.REQUETS_MONTHLY_BOB_DATA);
export const toggleMonthlyBOBLoader = createAction(MonthlyBOBActionTypes.TOGGLE_MONTHLY_BOB_LOADER);
export const MonthlyBOBDataSuccess = createAction(MonthlyBOBActionTypes.MONTHLY_BOB_DATA_SUCCESS);
export const MonthlyBOBDataFailed = createAction(MonthlyBOBActionTypes.MONTHLY_BOB_DATA_FAILED);
