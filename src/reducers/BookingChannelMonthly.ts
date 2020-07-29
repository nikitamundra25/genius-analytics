import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { BookingChannelMonthlyInitialState } from "../states";
import { BookingChannelMonthlyActionTypes } from "../actions";

export const BookingChannelMonthlyReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [BookingChannelMonthlyActionTypes.TOGGLE_BOOKING_CHANNEL_MONTHLY_LOADER]: (
      state = BookingChannelMonthlyInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [BookingChannelMonthlyActionTypes.BOOKING_CHANNEL_MONTHLY_DATA_FAILED]: (
      state = BookingChannelMonthlyInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [BookingChannelMonthlyActionTypes.BOOKING_CHANNEL_MONTHLY_DATA_SUCCESS]: (
      state = BookingChannelMonthlyInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  BookingChannelMonthlyInitialState
);
