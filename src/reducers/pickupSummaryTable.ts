import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummaryTableInitialState } from "../states";
import { pickupSummaryTableActionTypes } from "../actions";

export const pickupSummaryTableReducer = handleActions<
  IBookingChannelModel,
  IBookingChannelModel
>(
  {
    [pickupSummaryTableActionTypes.TOGGLE_PICKUP_SUMMARY_TABLE_LOADER]: (
      state = pickupSummaryTableInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [pickupSummaryTableActionTypes.PICKUP_SUMMARY_TABLE_DATA_FAILED]: (
      state = pickupSummaryTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [pickupSummaryTableActionTypes.PICKUP_SUMMARY_TABLE_DATA_SUCCESS]: (
      state = pickupSummaryTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pickupSummaryTableInitialState
);
