import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { MTDRGIPerformanceInitialState } from "../states";
import { MTRDRGIPerformanceActionTypes } from "../actions";

export const MTRDRGIPerformanceReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_LOADER]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_DATA_FAILED]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_DATA_SUCCESS]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    //  past
    [MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_PAST_LOADER]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_PAST_DATA_FAILED]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_PAST_DATA_SUCCESS]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // future
    [MTRDRGIPerformanceActionTypes.TOGGLE_MTRDRGI_PERFORMANCE_FUTURE_LOADER]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_FUTURE_DATA_FAILED]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MTRDRGIPerformanceActionTypes.MTRDRGI_PERFORMANCE_FUTURE_DATA_SUCCESS]: (
      state = MTDRGIPerformanceInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  MTDRGIPerformanceInitialState
);
