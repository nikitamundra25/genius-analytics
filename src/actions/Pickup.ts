import { createAction } from 'redux-actions';

export enum PickupTypes {

  TOGGLE_PICKUP_SUMMARY_LOADER = "Toggle pickup summary loader",
  PICKUP_SUMMARY_REQUEST = 'Request pickup summary data list!',
  PICKUP_SUMMARY_SUCCESS = 'pickup summary data list Successfully!',
  PICKUP_SUMMARY_FAILURE = 'pickup summary data list Failed',

  TOGGLE_PICKUP_DETAIL_LOADER = "Toggle pickup DETAIL loader",
  PICKUP_DETAIL_REQUEST = 'Request pickup detail data list!',
  PICKUP_DETAIL_SUCCESS = 'pickup detail data list Successfully!',
  PICKUP_DETAIL_FAILURE = 'pickup detail data list Failed',
}


/* Pickup summary list
 */
export const TogglePickupSummaryLoader = createAction(
  PickupTypes.TOGGLE_PICKUP_SUMMARY_LOADER
); 

export const PickupSummaryRequest = createAction(
  PickupTypes.PICKUP_SUMMARY_REQUEST,
);

export const PickupSummarySuccess = createAction(PickupTypes.PICKUP_SUMMARY_SUCCESS);
export const PickupSummaryFailed = createAction(PickupTypes.PICKUP_SUMMARY_FAILURE);

// Pickup deatil list

export const TogglePickupDetailLoader = createAction(
  PickupTypes.TOGGLE_PICKUP_SUMMARY_LOADER
); 

export const PickupDetailRequest = createAction(
    PickupTypes.PICKUP_DETAIL_REQUEST,
  );
  
  export const PickupDetailSuccess = createAction(PickupTypes.PICKUP_DETAIL_SUCCESS);
  export const PickupDetailFailed = createAction(PickupTypes.PICKUP_DETAIL_FAILURE);