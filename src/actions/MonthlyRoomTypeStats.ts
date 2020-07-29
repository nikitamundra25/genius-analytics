import { createAction } from "redux-actions";

export enum MonthlyRoomTypeStaticsActionTypes {
  REQUETS_MONTHLY_ROOM_TYPE_STATICS_DATA = "Request Monthly Room type statics Data",
  TOGGLE_MONTHLY_ROOM_TYPE_STATICS_LOADER = "Toggle Monthly Room type statics loader",
  MONTHLY_ROOM_TYPE_STATICS_DATA_SUCCESS = "Requested Monthly Room type statics data fetched successfully",
  MONTHLY_ROOM_TYPE_STATICS_DATA_FAILED = "Requested Monthly Room type statics data fetching failed",
}

export const requestMonthlyRoomTypeStaticsData = createAction(MonthlyRoomTypeStaticsActionTypes.REQUETS_MONTHLY_ROOM_TYPE_STATICS_DATA);
export const toggleMonthlyRoomTypeStaticsLoader = createAction(MonthlyRoomTypeStaticsActionTypes.TOGGLE_MONTHLY_ROOM_TYPE_STATICS_LOADER);
export const MonthlyRoomTypeStaticsDataSuccess = createAction(MonthlyRoomTypeStaticsActionTypes.MONTHLY_ROOM_TYPE_STATICS_DATA_SUCCESS);
export const MonthlyRoomTypeStaticsDataFailed = createAction(MonthlyRoomTypeStaticsActionTypes.MONTHLY_ROOM_TYPE_STATICS_DATA_FAILED);
