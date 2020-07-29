import { createAction } from "redux-actions";

export enum RoomTypeStaticsActionTypes {
  REQUETS_ROOM_TYPE_STATICS_DATA = "Request Room type statics Data",
  TOGGLE_ROOM_TYPE_STATICS_LOADER = "Toggle Room type statics loader",
  ROOM_TYPE_STATICS_DATA_SUCCESS = "Requested Room type statics data fetched successfully",
  ROOM_TYPE_STATICS_DATA_FAILED = "Requested Room type statics data fetching failed",
}

export const requestRoomTypeStaticsData = createAction(RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_DATA);
export const toggleRoomTypeStaticsLoader = createAction(RoomTypeStaticsActionTypes.TOGGLE_ROOM_TYPE_STATICS_LOADER);
export const RoomTypeStaticsDataSuccess = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_DATA_SUCCESS);
export const RoomTypeStaticsDataFailed = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_DATA_FAILED);
