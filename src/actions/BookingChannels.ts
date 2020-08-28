import { createAction } from "redux-actions";

export enum BookingChannelActionTypes {
  REQUETS_BOOKING_CHANNEL_DATA = "Request Booking Channel Data",
  TOGGLE_BOOKING_CHANNEL_LOADER = "Toggle Booking Channel loader",
  BOOKING_CHANNEL_DATA_SUCCESS = "Requested Booking Channel data fetched successfully",
  BOOKING_CHANNEL_DATA_FAILED = "Requested Booking Channel data fetching failed",

  REQUETS_BOOKING_CHANNEL_PAST_DATA = "Request Booking Channel Past Data",
  TOGGLE_BOOKING_CHANNEL_PAST_LOADER = "Toggle Booking Channel Past loader",
  BOOKING_CHANNEL_PAST_DATA_SUCCESS = "Requested Booking Channel Past data fetched successfully",
  BOOKING_CHANNEL_PAST_DATA_FAILED = "Requested Booking Channel Past data fetching failed",

  REQUETS_BOOKING_CHANNEL_FUTURE_DATA = "Request Booking Channel future Data",
  TOGGLE_BOOKING_CHANNEL_FUTURE_LOADER = "Toggle Booking Channel future loader",
  BOOKING_CHANNEL_FUTURE_DATA_SUCCESS = "Requested Booking Channel future data fetched successfully",
  BOOKING_CHANNEL_FUTURE_DATA_FAILED = "Requested Booking Channel future data fetching failed",
}

export const requestBookingChannelData = createAction(BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_DATA);
export const toggleBookingChannelLoader = createAction(BookingChannelActionTypes.TOGGLE_BOOKING_CHANNEL_LOADER);
export const bookingChannelDataSuccess = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_DATA_SUCCESS);
export const bookingChannelDataFailed = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_DATA_FAILED);


// Past
export const requestBookingChannelPastData = createAction(BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_PAST_DATA);
export const toggleBookingChannelPastLoader = createAction(BookingChannelActionTypes.TOGGLE_BOOKING_CHANNEL_PAST_LOADER);
export const bookingChannelPastDataSuccess = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_PAST_DATA_SUCCESS);
export const bookingChannelPastDataFailed = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_PAST_DATA_FAILED);

//  Future
export const requestBookingChannelFutureData = createAction(BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_FUTURE_DATA);
export const toggleBookingChannelFutureLoader = createAction(BookingChannelActionTypes.TOGGLE_BOOKING_CHANNEL_FUTURE_LOADER);
export const bookingChannelFutureDataSuccess = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_FUTURE_DATA_SUCCESS);
export const bookingChannelFutureDataFailed = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_FUTURE_DATA_FAILED);
