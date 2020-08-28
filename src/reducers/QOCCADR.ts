import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { QOCCADRInitialState } from "../states";
import { QOCCADRActionTypes } from "../actions";

export const QOCCADRReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [QOCCADRActionTypes.TOGGLE_QOCCADR_LOADER]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [QOCCADRActionTypes.QOCCADR_DATA_FAILED]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [QOCCADRActionTypes.QOCCADR_DATA_SUCCESS]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // PAST
    [QOCCADRActionTypes.TOGGLE_QOCCADR_PAST_LOADER]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [QOCCADRActionTypes.QOCCADR_PAST_DATA_FAILED]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [QOCCADRActionTypes.QOCCADR_PAST_DATA_SUCCESS]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // future
    [QOCCADRActionTypes.TOGGLE_QOCCADR_FUTURE_LOADER]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [QOCCADRActionTypes.QOCCADR_FUTURE_DATA_FAILED]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [QOCCADRActionTypes.QOCCADR_FUTURE_DATA_SUCCESS]: (
      state = QOCCADRInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  QOCCADRInitialState
);
