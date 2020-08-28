import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { ROOMTYPESInitialState } from "../states";
import { ROOMTYPESActionTypes } from "../actions";

export const ROOMTYPESReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_LOADER]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [ROOMTYPESActionTypes.ROOMTYPES_DATA_FAILED]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [ROOMTYPESActionTypes.ROOMTYPES_DATA_SUCCESS]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // PAST
    [ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_PAST_LOADER]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [ROOMTYPESActionTypes.ROOMTYPES_PAST_DATA_FAILED]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [ROOMTYPESActionTypes.ROOMTYPES_PAST_DATA_SUCCESS]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // FUTURE
    [ROOMTYPESActionTypes.TOGGLE_ROOMTYPES_FUTURE_LOADER]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [ROOMTYPESActionTypes.ROOMTYPES_FUTURE_DATA_FAILED]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [ROOMTYPESActionTypes.ROOMTYPES_FUTURE_DATA_SUCCESS]: (
      state = ROOMTYPESInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  ROOMTYPESInitialState
);
