import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { DailyOccupacyBudLyInitialState } from "../states";
import { DailyOccupacyBudLyActionTypes } from "../actions";

export const DailyOccupacyBudLyReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [DailyOccupacyBudLyActionTypes.TOGGLE_DAILY_OCCUPACY_BUD_LY_LOADER]: (
      state = DailyOccupacyBudLyInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [DailyOccupacyBudLyActionTypes.DAILY_OCCUPACY_BUD_LY_DATA_FAILED]: (
      state = DailyOccupacyBudLyInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [DailyOccupacyBudLyActionTypes.DAILY_OCCUPACY_BUD_LY_DATA_SUCCESS]: (
      state = DailyOccupacyBudLyInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  DailyOccupacyBudLyInitialState
);
