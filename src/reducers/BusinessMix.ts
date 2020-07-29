import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { BusinessMixInitialState } from "../states";
import { BusinessMixActionTypes } from "../actions";

export const BusinessMixReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [BusinessMixActionTypes.TOGGLE_BUSINESS_MIX_LOADER]: (
      state = BusinessMixInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [BusinessMixActionTypes.BUSINESS_MIX_DATA_FAILED]: (
      state = BusinessMixInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [BusinessMixActionTypes.BUSINESS_MIX_DATA_SUCCESS]: (
      state = BusinessMixInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  BusinessMixInitialState
);
