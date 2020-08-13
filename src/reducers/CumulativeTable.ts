import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { CumulativeTableInitialState } from "../states";
import { CumulativeTableActionTypes } from "../actions";

export const CumulativeTableReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [CumulativeTableActionTypes.TOGGLE_CUMULATIVE_TABLE_LOADER]: (
      state = CumulativeTableInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [CumulativeTableActionTypes.CUMULATIVE_TABLE_DATA_FAILED]: (
      state = CumulativeTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [CumulativeTableActionTypes.CUMULATIVE_TABLE_DATA_SUCCESS]: (
      state = CumulativeTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  CumulativeTableInitialState
);
