import { createAction } from "redux-actions";

export enum BookingChannelActionTypes {
  REQUETS_BOOKING_CHANNEL_DATA = "Request Booking Channel Data",
  TOGGLE_BOOKING_CHANNEL_LOADER = "Toggle Booking Channel loader",
  BOOKING_CHANNEL_DATA_SUCCESS = "Requested Booking Channel data fetched successfully",
  BOOKING_CHANNEL_DATA_FAILED = "Requested Booking Channel data fetching failed",
}

export const requestBookingChannelData = createAction(BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_DATA);
export const toggleBookingChannelLoader = createAction(BookingChannelActionTypes.TOGGLE_BOOKING_CHANNEL_LOADER);
export const bookingChannelDataSuccess = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_DATA_SUCCESS);
export const bookingChannelDataFailed = createAction(BookingChannelActionTypes.BOOKING_CHANNEL_DATA_FAILED);
