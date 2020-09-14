import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pivotTableInitialState } from "../states";
import { PivotTableActionTypes } from "../actions";

export const pivotTableReducer = handleActions<
  IBookingChannelModel,
  IBookingChannelModel
>(
  {
    [PivotTableActionTypes.TOGGLE_PIVOT_TABLE_LOADER]: (
      state = pivotTableInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [PivotTableActionTypes.PIVOT_TABLE_DATA_FAILED]: (
      state = pivotTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [PivotTableActionTypes.PIVOT_TABLE_DATA_SUCCESS]: (
      state = pivotTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pivotTableInitialState
);
