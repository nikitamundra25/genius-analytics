import { PickupInitialState } from './../states';
import { handleActions } from 'redux-actions';
import { IPickupModel } from '../interfaces';
import { PickupTypes } from '../actions';

export const PickupReducer = handleActions<IPickupModel, any>(
  {
    //   Pickup main list 
    [PickupTypes.PICKUP_SUMMARY_REQUEST]: (
      state = PickupInitialState,
      action,
    ): IPickupModel => ({
      ...state,
      isLoading: true,
    }),
    [PickupTypes.PICKUP_SUMMARY_SUCCESS]: (
      state = PickupInitialState,
      action,
    ): IPickupModel => ({
      ...state,
      isLoading: false,
      pickupSummaryList: action.payload.pickupSummaryList,
    }),
    [PickupTypes.PICKUP_SUMMARY_FAILURE]: (
      state = PickupInitialState,
      action,
    ): IPickupModel => ({
      ...state,
      isLoading: false,
      isError: action.payload.error,
    }),


  },
  PickupInitialState,
);
