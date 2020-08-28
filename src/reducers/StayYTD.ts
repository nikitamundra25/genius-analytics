import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { StayYTDInitialState } from "../states";
import { StayYTDActionTypes } from "../actions";

export const StayYTDReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [StayYTDActionTypes.TOGGLE_STAY_YTD_LOADER]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [StayYTDActionTypes.STAY_YTD_DATA_FAILED]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [StayYTDActionTypes.STAY_YTD_DATA_SUCCESS]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
    // PAST
    [StayYTDActionTypes.TOGGLE_STAY_YTD_PAST_LOADER]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [StayYTDActionTypes.STAY_YTD_PAST_DATA_FAILED]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [StayYTDActionTypes.STAY_YTD_PAST_DATA_SUCCESS]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // FUTURE
    [StayYTDActionTypes.TOGGLE_STAY_YTD_FUTURE_LOADER]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [StayYTDActionTypes.STAY_YTD_FUTURE_DATA_FAILED]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [StayYTDActionTypes.STAY_YTD_FUTURE_DATA_SUCCESS]: (
      state = StayYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  StayYTDInitialState
);
