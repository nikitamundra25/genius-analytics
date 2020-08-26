import { createLogic, Logic } from "redux-logic";
import {
  BookingChannelActionTypes,
  bookingChannelDataFailed,
  bookingChannelDataSuccess,
  toggleBookingChannelLoader,
  toggleBookingChannelPastLoader,
  bookingChannelPastDataFailed,
  bookingChannelPastDataSuccess,
  toggleBookingChannelFutureLoader,
  bookingChannelFutureDataFailed,
  bookingChannelFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getBookingChannelDataLogic = createLogic({
  type: BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleBookingChannelLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/BookingChannels.json",
      "GET"
    );
    if (isError) {
      dispatch(bookingChannelDataFailed());
      done();
      return;
    }
    dispatch(
      bookingChannelDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});


// PAST
const getBookingChannelDataPastLogic = createLogic({
  type: BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleBookingChannelPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastBookingChannels.json",
      "GET"
    );
    if (isError) {
      dispatch(bookingChannelPastDataFailed());
      done();
      return;
    }
    dispatch(
      bookingChannelPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// FUTURE
const getBookingChannelDataFutureLogic = createLogic({
  type: BookingChannelActionTypes.REQUETS_BOOKING_CHANNEL_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleBookingChannelFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureBookingChannels.json",
      "GET"
    );
    if (isError) {
      dispatch(bookingChannelFutureDataFailed());
      done();
      return;
    }
    dispatch(
      bookingChannelFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const BookingChannelDataLogics: Logic[] = [getBookingChannelDataLogic as Logic, getBookingChannelDataPastLogic as Logic, getBookingChannelDataFutureLogic as Logic];
