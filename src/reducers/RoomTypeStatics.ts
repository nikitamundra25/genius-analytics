import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { RoomTypeStaticsInitialState } from "../states";
import { RoomTypeStaticsActionTypes } from "../actions";

export const RoomTypeStaticsReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [RoomTypeStaticsActionTypes.TOGGLE_ROOM_TYPE_STATICS_LOADER]: (
      state = RoomTypeStaticsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: true,
    }),
    [RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_DATA_FAILED]: (
      state = RoomTypeStaticsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RoomTypeStaticsActionTypes.ROOM_TYPE_STATICS_DATA_SUCCESS]: (
      state = RoomTypeStaticsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  RoomTypeStaticsInitialState
);
