import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { MOCCADRInitialState } from "../states";
import { MOCCADRActionTypes } from "../actions";

export const MOCCADRReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [MOCCADRActionTypes.TOGGLE_MOCCADR_LOADER]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MOCCADRActionTypes.MOCCADR_DATA_FAILED]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MOCCADRActionTypes.MOCCADR_DATA_SUCCESS]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // past
    [MOCCADRActionTypes.TOGGLE_MOCCADR_PAST_LOADER]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MOCCADRActionTypes.MOCCADR_PAST_DATA_FAILED]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MOCCADRActionTypes.MOCCADR_PAST_DATA_SUCCESS]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // future
    [MOCCADRActionTypes.TOGGLE_MOCCADR_FUTURE_LOADER]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MOCCADRActionTypes.MOCCADR_FUTURE_DATA_FAILED]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MOCCADRActionTypes.MOCCADR_FUTURE_DATA_SUCCESS]: (
      state = MOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  MOCCADRInitialState
);
