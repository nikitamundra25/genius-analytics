import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { LeadTimeYTDSegmentInitialState } from "../states";
import { LeadTimeYTDSegmentActionTypes } from "../actions";

export const LeadTimesYTDSegmentReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_LOADER]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_DATA_FAILED]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_DATA_SUCCESS]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // PAST
    [LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_PAST_LOADER]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_PAST_DATA_FAILED]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_PAST_DATA_SUCCESS]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),

    // future
    [LeadTimeYTDSegmentActionTypes.TOGGLE_KEY_LEAD_TIMES_SEGMENT_FUTURE_LOADER]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA_FAILED]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [LeadTimeYTDSegmentActionTypes.KEY_LEAD_TIMES_SEGMENT_FUTURE_DATA_SUCCESS]: (
      state = LeadTimeYTDSegmentInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  LeadTimeYTDSegmentInitialState
);
