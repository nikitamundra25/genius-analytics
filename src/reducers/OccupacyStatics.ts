import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { OccupacyStaticsInitialState } from "../states";
import { OccupacyStaticsActionTypes } from "../actions";

export const OccupacyStaticsReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [OccupacyStaticsActionTypes.TOGGLE_OCCUPACY_STATICS_LOADER]: (
      state = OccupacyStaticsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [OccupacyStaticsActionTypes.OCCUPACY_STATICS_DATA_FAILED]: (
      state = OccupacyStaticsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [OccupacyStaticsActionTypes.OCCUPACY_STATICS_DATA_SUCCESS]: (
      state = OccupacyStaticsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  OccupacyStaticsInitialState
);
