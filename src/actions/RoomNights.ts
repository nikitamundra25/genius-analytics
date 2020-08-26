import { createAction } from "redux-actions";

export enum RoomNightsActionTypes {
  REQUETS_ROOM_NIGHTS_DATA = "Request Room nights Data",
  TOGGLE_ROOM_NIGHTS_LOADER = "Toggle Room nights loader",
  ROOM_NIGHTS_DATA_SUCCESS = "Requested Room nights data fetched successfully",
  ROOM_NIGHTS_DATA_FAILED = "Requested Room nights data fetching failed",

  REQUETS_ROOM_NIGHTS_PAST_DATA = "Request Room nights past Data",
  TOGGLE_ROOM_NIGHTS_PAST_LOADER = "Toggle Room nights past loader",
  ROOM_NIGHTS_PAST_DATA_SUCCESS = "Requested Room nights past data fetched successfully",
  ROOM_NIGHTS_PAST_DATA_FAILED = "Requested Room nights past data fetching failed",

  REQUETS_ROOM_NIGHTS_FUTURE_DATA = "Request Room nights future Data",
  TOGGLE_ROOM_NIGHTS_FUTURE_LOADER = "Toggle Room nights future loader",
  ROOM_NIGHTS_FUTURE_DATA_SUCCESS = "Requested Room nights future data fetched successfully",
  ROOM_NIGHTS_FUTURE_DATA_FAILED = "Requested Room nights future data fetching failed",
}

export const requestRoomNightsData = createAction(RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_DATA);
export const toggleRoomNightsLoader = createAction(RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_LOADER);
export const RoomNightsDataSuccess = createAction(RoomNightsActionTypes.ROOM_NIGHTS_DATA_SUCCESS);
export const RoomNightsDataFailed = createAction(RoomNightsActionTypes.ROOM_NIGHTS_DATA_FAILED);

export const requestRoomNightsPastData = createAction(RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_PAST_DATA);
export const toggleRoomNightsPastLoader = createAction(RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_PAST_LOADER);
export const RoomNightsPastDataSuccess = createAction(RoomNightsActionTypes.ROOM_NIGHTS_PAST_DATA_SUCCESS);
export const RoomNightsPastDataFailed = createAction(RoomNightsActionTypes.ROOM_NIGHTS_PAST_DATA_FAILED);

export const requestRoomNightsFutureData = createAction(RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_FUTURE_DATA);
export const toggleRoomNightsFutureLoader = createAction(RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_FUTURE_LOADER);
export const RoomNightsFutureDataSuccess = createAction(RoomNightsActionTypes.ROOM_NIGHTS_FUTURE_DATA_SUCCESS);
export const RoomNightsFutureDataFailed = createAction(RoomNightsActionTypes.ROOM_NIGHTS_FUTURE_DATA_FAILED);