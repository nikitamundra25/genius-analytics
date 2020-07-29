import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { MarketSegmentationInitialState } from "../states";
import { MarketSegmentationActionTypes } from "../actions";

export const MarketSegmentationReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [MarketSegmentationActionTypes.TOGGLE_MARKET_SEGMENTATION_LOADER]: (
      state = MarketSegmentationInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MarketSegmentationActionTypes.MARKET_SEGMENTATION_DATA_FAILED]: (
      state = MarketSegmentationInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MarketSegmentationActionTypes.MARKET_SEGMENTATION_DATA_SUCCESS]: (
      state = MarketSegmentationInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  MarketSegmentationInitialState
);
