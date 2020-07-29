import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { BookingChannelInitialState } from "../states";
import { BookingChannelActionTypes } from "../actions";

export const BookingChannelReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [BookingChannelActionTypes.TOGGLE_BOOKING_CHANNEL_LOADER]: (
      state = BookingChannelInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [BookingChannelActionTypes.BOOKING_CHANNEL_DATA_FAILED]: (
      state = BookingChannelInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [BookingChannelActionTypes.BOOKING_CHANNEL_DATA_SUCCESS]: (
      state = BookingChannelInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  BookingChannelInitialState
);
