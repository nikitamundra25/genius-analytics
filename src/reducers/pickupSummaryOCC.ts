import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummaryOCCInitialState } from "../states";
import { pickupSummaryOCCDataActionTypes } from "../actions";

export const pickupSummaryOCCReducer = handleActions<
  IBookingChannelModel,
  IBookingChannelModel
>(
  {
    [pickupSummaryOCCDataActionTypes.TOGGLE_PICKUP_SUMMARY_OCCDATA_LOADER]: (
      state = pickupSummaryOCCInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [pickupSummaryOCCDataActionTypes.PICKUP_SUMMARY_OCCDATA_DATA_FAILED]: (
      state = pickupSummaryOCCInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [pickupSummaryOCCDataActionTypes.PICKUP_SUMMARY_OCCDATA_DATA_SUCCESS]: (
      state = pickupSummaryOCCInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pickupSummaryOCCInitialState
);
