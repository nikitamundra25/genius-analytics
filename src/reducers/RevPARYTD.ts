import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { RevPARYTDInitialState } from "../states";
import { RevPARYTDActionTypes } from "../actions";

export const RevPARYTDReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [RevPARYTDActionTypes.TOGGLE_REV_PARYTD_LOADER]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RevPARYTDActionTypes.REV_PARYTD_DATA_FAILED]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RevPARYTDActionTypes.REV_PARYTD_DATA_SUCCESS]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // past
    [RevPARYTDActionTypes.TOGGLE_REV_PARYTD_PAST_LOADER]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RevPARYTDActionTypes.REV_PARYTD_PAST_DATA_FAILED]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RevPARYTDActionTypes.REV_PARYTD_PAST_DATA_SUCCESS]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // future
    [RevPARYTDActionTypes.TOGGLE_REV_PARYTD_FUTURE_LOADER]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [RevPARYTDActionTypes.REV_PARYTD_FUTURE_DATA_FAILED]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [RevPARYTDActionTypes.REV_PARYTD_FUTURE_DATA_SUCCESS]: (
      state = RevPARYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  RevPARYTDInitialState
);
