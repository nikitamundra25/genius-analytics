import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummaryDowDataInitialState } from "../states";
import { pickupSummaryDowDataActionTypes } from "../actions";

export const pickupSummaryDowDataReducer = handleActions<
  IBookingChannelModel,
  IBookingChannelModel
>(
  {
    [pickupSummaryDowDataActionTypes.TOGGLE_PICKUP_SUMMARY_DOWDATA_LOADER]: (
      state = pickupSummaryDowDataInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [pickupSummaryDowDataActionTypes.PICKUP_SUMMARY_DOWDATA_DATA_FAILED]: (
      state = pickupSummaryDowDataInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [pickupSummaryDowDataActionTypes.PICKUP_SUMMARY_DOWDATA_DATA_SUCCESS]: (
      state = pickupSummaryDowDataInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pickupSummaryDowDataInitialState
);
