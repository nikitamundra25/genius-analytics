import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { RGIPerformanceInitialState } from "../states";
import { RGIPerformanceActionTypes } from "../actions";

export const RGIPerformanceReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_LOADER]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RGIPerformanceActionTypes.RGI_PERFORMANCE_DATA_FAILED]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RGIPerformanceActionTypes.RGI_PERFORMANCE_DATA_SUCCESS]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // past
    [RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_PAST_LOADER]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RGIPerformanceActionTypes.RGI_PERFORMANCE_PAST_DATA_FAILED]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RGIPerformanceActionTypes.RGI_PERFORMANCE_PAST_DATA_SUCCESS]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // future
    [RGIPerformanceActionTypes.TOGGLE_RGI_PERFORMANCE_FUTURE_LOADER]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RGIPerformanceActionTypes.RGI_PERFORMANCE_FUTURE_DATA_FAILED]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RGIPerformanceActionTypes.RGI_PERFORMANCE_FUTURE_DATA_SUCCESS]: (
      state = RGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  RGIPerformanceInitialState
);
