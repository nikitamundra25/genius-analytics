import { createAction } from "redux-actions";

export enum BookingChannelMonthlyActionTypes {
  REQUETS_BOOKING_CHANNEL_MONTHLY_DATA = "Request booking channel monthly Data",
  TOGGLE_BOOKING_CHANNEL_MONTHLY_LOADER = "Toggle booking channel monthly loader",
  BOOKING_CHANNEL_MONTHLY_DATA_SUCCESS = "Requested booking channel monthly data fetched successfully",
  BOOKING_CHANNEL_MONTHLY_DATA_FAILED = "Requested booking channel monthly data fetching failed",
}

export const requestBookingChannelMonthlyData = createAction(BookingChannelMonthlyActionTypes.REQUETS_BOOKING_CHANNEL_MONTHLY_DATA);
export const toggleBookingChannelMonthlyLoader = createAction(BookingChannelMonthlyActionTypes.TOGGLE_BOOKING_CHANNEL_MONTHLY_LOADER);
export const BookingChannelMonthlyDataSuccess = createAction(BookingChannelMonthlyActionTypes.BOOKING_CHANNEL_MONTHLY_DATA_SUCCESS);
export const BookingChannelMonthlyDataFailed = createAction(BookingChannelMonthlyActionTypes.BOOKING_CHANNEL_MONTHLY_DATA_FAILED);
