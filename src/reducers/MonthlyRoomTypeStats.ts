import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { MonthlyRoomTypeStatsInitialState } from "../states";
import { MonthlyRoomTypeStaticsActionTypes } from "../actions";

export const MonthlyRoomTypeStatsReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [MonthlyRoomTypeStaticsActionTypes.TOGGLE_MONTHLY_ROOM_TYPE_STATICS_LOADER]: (
      state = MonthlyRoomTypeStatsInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MonthlyRoomTypeStaticsActionTypes.MONTHLY_ROOM_TYPE_STATICS_DATA_FAILED]: (
      state = MonthlyRoomTypeStatsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MonthlyRoomTypeStaticsActionTypes.MONTHLY_ROOM_TYPE_STATICS_DATA_SUCCESS]: (
      state = MonthlyRoomTypeStatsInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  MonthlyRoomTypeStatsInitialState
);
