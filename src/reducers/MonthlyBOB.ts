import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { MonthlyBOBInitialState } from "../states";
import { MonthlyBOBActionTypes } from "../actions";

export const MonthlyBOBReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [MonthlyBOBActionTypes.TOGGLE_MONTHLY_BOB_LOADER]: (
      state = MonthlyBOBInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [MonthlyBOBActionTypes.MONTHLY_BOB_DATA_FAILED]: (
      state = MonthlyBOBInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [MonthlyBOBActionTypes.MONTHLY_BOB_DATA_SUCCESS]: (
      state = MonthlyBOBInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  MonthlyBOBInitialState
);
