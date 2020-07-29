import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { RateCodeStatisticsInitialState } from "../states";
import { RateCodeStatisticsActionTypes } from "../actions";

export const RateCodeStatisticsReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [RateCodeStatisticsActionTypes.TOGGLE_RATE_CODE_STATISTICS_LOADER]: (
      state = RateCodeStatisticsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RateCodeStatisticsActionTypes.RATE_CODE_STATISTICS_DATA_FAILED]: (
      state = RateCodeStatisticsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RateCodeStatisticsActionTypes.RATE_CODE_STATISTICS_DATA_SUCCESS]: (
      state = RateCodeStatisticsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  RateCodeStatisticsInitialState
);
