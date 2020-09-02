import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupMainSummaryInitialState } from "../states";
import { pickupMainSummaryActionTypes } from "../actions";

export const pickupMainSummaryReducer = handleActions<
  IBookingChannelModel,
  IBookingChannelModel
>(
  {
    [pickupMainSummaryActionTypes.TOGGLE_PICKUP_MAIN_SUMMARY_LOADER]: (
      state = pickupMainSummaryInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [pickupMainSummaryActionTypes.PICKUP_MAIN_SUMMARY_DATA_FAILED]: (
      state = pickupMainSummaryInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [pickupMainSummaryActionTypes.PICKUP_MAIN_SUMMARY_DATA_SUCCESS]: (
      state = pickupMainSummaryInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pickupMainSummaryInitialState
);
