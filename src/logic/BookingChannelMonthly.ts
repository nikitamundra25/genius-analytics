import { createLogic, Logic } from "redux-logic";
import {
  BookingChannelMonthlyActionTypes,
  BookingChannelMonthlyDataFailed,
  BookingChannelMonthlyDataSuccess,
  toggleBookingChannelMonthlyLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getBookingChannelMonthlyDataLogic = createLogic({
  type: BookingChannelMonthlyActionTypes.REQUETS_BOOKING_CHANNEL_MONTHLY_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleBookingChannelMonthlyLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/BookingChannelMonthly.json",
      "GET"
    );
    if (isError) {
      dispatch(BookingChannelMonthlyDataFailed());
      done();
      return;
    }
    dispatch(
      BookingChannelMonthlyDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const BookingChannelMonthlyDataLogics: Logic[] = [getBookingChannelMonthlyDataLogic as Logic];
