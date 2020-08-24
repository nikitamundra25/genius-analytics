import { handleActions } from "redux-actions";
import { IBookingChannelModel } from "../interfaces";
import { pickupBlobInitialState } from "../states";
import { PickupBlobActionTypes } from "../actions";

export const pickupBlobReducer = handleActions<IBookingChannelModel, IBookingChannelModel>(
  {
    [PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_LOADER]: (
      state = pickupBlobInitialState,
      action
    ): IBookingChannelModel => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
    [PickupBlobActionTypes.PICKUP_BLOB_FAILED]: (
      state = pickupBlobInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: [],
      isError: true,
    }),
    [PickupBlobActionTypes.PICKUP_BLOB_SUCCESS]: (
      state = pickupBlobInitialState,
      action
    ): IBookingChannelModel => ({
      isLoading: false,
      data: action.payload.data,
      isError: false,
    }),


// Future blob data
[PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_FUTURE_DATA_LOADER]: (
  state = pickupBlobInitialState,
  action
): IBookingChannelModel => ({
  ...state,
  isLoading: action.payload.isLoading,
}),
[PickupBlobActionTypes.PICKUP_BLOB_FUTURE_DATA_FAILED]: (
  state = pickupBlobInitialState,
  action
): IBookingChannelModel => ({
  isLoading: false,
  data: [],
  isError: true,
}),
[PickupBlobActionTypes.PICKUP_BLOB_FUTURE_DATA_SUCCESS]: (
  state = pickupBlobInitialState,
  action
): IBookingChannelModel => ({
  isLoading: false,
  data: action.payload.data,
  isError: false,
}),



// Past blob data
[PickupBlobActionTypes.TOGGLE_PICKUP_BLOB_PAST_DATA_LOADER]: (
  state = pickupBlobInitialState,
  action
): IBookingChannelModel => ({
  ...state,
  isLoading: action.payload.isLoading,
}),
[PickupBlobActionTypes.PICKUP_BLOB_PAST_DATA_FAILED]: (
  state = pickupBlobInitialState,
  action
): IBookingChannelModel => ({
  isLoading: false,
  data: [],
  isError: true,
}),
[PickupBlobActionTypes.PICKUP_BLOB_PAST_DATA_SUCCESS]: (
  state = pickupBlobInitialState,
  action
): IBookingChannelModel => ({
  isLoading: false,
  data: action.payload.data,
  isError: false,
}),
  },
  pickupBlobInitialState
);
