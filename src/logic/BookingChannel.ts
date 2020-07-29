import { createLogic, Logic } from "redux-logic";
import {
  BookingChannelActionTypes,
  bookingChannelDataFailed,
  bookingChannelDataSuccess,
  toggleBookingChannelLoader,
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

export const BookingChannelDataLogics: Logic[] = [getBookingChannelDataLogic as Logic];
