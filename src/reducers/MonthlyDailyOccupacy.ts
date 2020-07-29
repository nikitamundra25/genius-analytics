import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { MonthlyDailyOccupacyInitialState } from "../states";
import { MonthlyDailyOccupacyActionTypes } from "../actions";

export const MonthlyDailyOccupacyReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [MonthlyDailyOccupacyActionTypes.TOGGLE_MONTHLY_DAILY_OCCUPACY_LOADER]: (
      state = MonthlyDailyOccupacyInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MonthlyDailyOccupacyActionTypes.MONTHLY_DAILY_OCCUPACY_DATA_FAILED]: (
      state = MonthlyDailyOccupacyInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MonthlyDailyOccupacyActionTypes.MONTHLY_DAILY_OCCUPACY_DATA_SUCCESS]: (
      state = MonthlyDailyOccupacyInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  MonthlyDailyOccupacyInitialState
);
