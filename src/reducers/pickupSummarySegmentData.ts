import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupSummarySegmentInitialState } from "../states";
import { pickupSummarySegmentDataActionTypes } from "../actions";

export const pickupSummarySegmentReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [pickupSummarySegmentDataActionTypes.TOGGLE_PICKUP_SUMMARY_SEGMENT_DATA_LOADER]: (
      state = pickupSummarySegmentInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: true,
    }),
    [pickupSummarySegmentDataActionTypes.PICKUP_SUMMARY_SEGMENT_DATA_DATA_FAILED]: (
      state = pickupSummarySegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [pickupSummarySegmentDataActionTypes.PICKUP_SUMMARY_SEGMENT_DATA_DATA_SUCCESS]: (
      state = pickupSummarySegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pickupSummarySegmentInitialState
);
