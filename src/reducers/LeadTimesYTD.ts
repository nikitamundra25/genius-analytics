import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { LeadTimesYTDInitialState } from "../states";
import { KeyLeadTimesYTDActionTypes } from "../actions";

export const LeadTimesYTDReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [KeyLeadTimesYTDActionTypes.TOGGLE_KEY_LEAD_TIMES_LOADER]: (
      state = LeadTimesYTDInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_DATA_FAILED]: (
      state = LeadTimesYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [KeyLeadTimesYTDActionTypes.KEY_LEAD_TIMES_DATA_SUCCESS]: (
      state = LeadTimesYTDInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  LeadTimesYTDInitialState
);
