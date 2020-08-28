import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { RoomNightsInitialState } from "../states";
import { RoomNightsActionTypes } from "../actions";

export const RoomNightsReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_LOADER]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RoomNightsActionTypes.ROOM_NIGHTS_DATA_FAILED]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RoomNightsActionTypes.ROOM_NIGHTS_DATA_SUCCESS]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
    //  Past
    [RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_PAST_LOADER]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RoomNightsActionTypes.ROOM_NIGHTS_PAST_DATA_FAILED]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RoomNightsActionTypes.ROOM_NIGHTS_PAST_DATA_SUCCESS]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    //  Future
    [RoomNightsActionTypes.TOGGLE_ROOM_NIGHTS_FUTURE_LOADER]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RoomNightsActionTypes.ROOM_NIGHTS_FUTURE_DATA_FAILED]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RoomNightsActionTypes.ROOM_NIGHTS_FUTURE_DATA_SUCCESS]: (
      state = RoomNightsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  RoomNightsInitialState
);
