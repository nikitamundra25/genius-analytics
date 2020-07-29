import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { KeyBusinessMetricsInitialState } from "../states";
import { KeyBusinessMetricsActionTypes } from "../actions";

export const KeyBusinessMetricsReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [KeyBusinessMetricsActionTypes.TOGGLE_KEY_BUSINESS_METRICS_LOADER]: (
      state = KeyBusinessMetricsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_DATA_FAILED]: (
      state = KeyBusinessMetricsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [KeyBusinessMetricsActionTypes.KEY_BUSINESS_METRICS_DATA_SUCCESS]: (
      state = KeyBusinessMetricsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  KeyBusinessMetricsInitialState
);
