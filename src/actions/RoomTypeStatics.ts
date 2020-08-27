import { createAction } from "redux-actions";

export enum RoomTypeStaticsActionTypes {
  REQUETS_ROOM_TYPE_STATICS_DATA = "Request Room type statics Data",
  TOGGLE_ROOM_TYPE_STATICS_LOADER = "Toggle Room type statics loader",
  ROOM_TYPE_STATICS_DATA_SUCCESS = "Requested Room type statics data fetched successfully",
  ROOM_TYPE_STATICS_DATA_FAILED = "Requested Room type statics data fetching failed",

  REQUETS_ROOM_TYPE_STATICS_PAST_DATA = "Request Room type statics past Data",
  TOGGLE_ROOM_TYPE_STATICS_PAST_LOADER = "Toggle Room type statics past loader",
  ROOM_TYPE_STATICS_PAST_DATA_SUCCESS = "Requested Room type statics past data fetched successfully",
  ROOM_TYPE_STATICS_PAST_DATA_FAILED = "Requested Room type statics past data fetching failed",

  REQUETS_ROOM_TYPE_STATICS_FUTURE_DATA = "Request Room type statics future Data",
  TOGGLE_ROOM_TYPE_STATICS_FUTURE_LOADER = "Toggle Room type statics future loader",
  ROOM_TYPE_STATICS_FUTURE_DATA_SUCCESS = "Requested Room type statics future data fetched successfully",
  ROOM_TYPE_STATICS_FUTURE_DATA_FAILED = "Requested Room type statics future data fetching failed",
}

export const requestRoomTypeStaticsData = createAction(RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_DATA);
export const toggleRoomTypeStaticsLoader = createAction(RoomTypeStaticsActionTypes.TOGGLE_ROOM_TYPE_STATICS_LOADER);
export const RoomTypeStaticsDataSuccess = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_DATA_SUCCESS);
export const RoomTypeStaticsDataFailed = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_DATA_FAILED);

// past
export const requestRoomTypeStaticsPastData = createAction(RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_PAST_DATA);
export const toggleRoomTypeStaticsPastLoader = createAction(RoomTypeStaticsActionTypes.TOGGLE_ROOM_TYPE_STATICS_PAST_LOADER);
export const RoomTypeStaticsPastDataSuccess = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_PAST_DATA_SUCCESS);
export const RoomTypeStaticsPastDataFailed = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_PAST_DATA_FAILED);


// future
export const requestRoomTypeStaticsFutureData = createAction(RoomTypeStaticsActionTypes.REQUETS_ROOM_TYPE_STATICS_FUTURE_DATA);
export const toggleRoomTypeStaticsFutureLoader = createAction(RoomTypeStaticsActionTypes.TOGGLE_ROOM_TYPE_STATICS_FUTURE_LOADER);
export const RoomTypeStaticsFutureDataSuccess = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_FUTURE_DATA_SUCCESS);
export const RoomTypeStaticsFutureDataFailed = createAction(RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_FUTURE_DATA_FAILED);

