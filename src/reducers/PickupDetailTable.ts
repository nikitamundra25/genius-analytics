import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupDetailTableInitialState } from "../states";
import { PickupDetailTableActionTypes } from "../actions";

export const pickupDetailTableReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [PickupDetailTableActionTypes.TOGGLE_PICKUP_DETAIL_TABLE_LOADER]: (
      state = pickupDetailTableInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [PickupDetailTableActionTypes.PICKUP_DETAIL_TABLE_FAILED]: (
      state = pickupDetailTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [PickupDetailTableActionTypes.PICKUP_DETAIL_TABLE_SUCCESS]: (
      state = pickupDetailTableInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),
  },
  pickupDetailTableInitialState
);
