import { createAction } from "redux-actions";

export enum RoomNightsActionTypes {
  REQUETS_ROOM_NIGHTS_DATA = "Request Room nights Data",
  TOGGLE_ROOM_NIGHTS_LOADER = "Toggle Room nights loader",
  ROOM_NIGHTS_DATA_SUCCESS = "Requested Room nights data fetched successfully",
  ROOM_NIGHTS_DATA_FAILED = "Requested Room nights data fetching failed",
}

export const requestRoomNightsData = createAction(RoomNightsActionTypes.REQUETS_ROOM_NIGHTS_DATA);
export const toggleRoomNightsLoader = createAction(RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_LOADER);
export const RoomNightsDataSuccess = createAction(RoomNightsActionTypes.ROOM_NIGHTS_DATA_SUCCESS);
export const RoomNightsDataFailed = createAction(RoomNightsActionTypes.ROOM_NIGHTS_DATA_FAILED);
