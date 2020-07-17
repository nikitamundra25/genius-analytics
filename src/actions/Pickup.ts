import { createAction } from 'redux-actions';

export enum PickupTypes {

  PICKUP_SUMMARY_REQUEST = 'Request pickup summary data list!',
  PICKUP_SUMMARY_SUCCESS = 'pickup summary data list Successfully!',
  PICKUP_SUMMARY_FAILURE = 'pickup summary data list Failed',

//   PICKUP_DETAIL_REQUEST = 'Request dashboard YEARLY data list!',
//   PICKUP_DETAIL_SUCCESS = 'dashboard YEARLY data list Successfully!',
//   PICKUP_DETAIL_FAILURE = 'dashboard YEARLY data list Failed',
}


/* Dashboard monthly list
 */
export const PickupSummaryRequest = createAction(
  PickupTypes.PICKUP_SUMMARY_REQUEST,
);

export const PickupSummarySuccess = createAction(PickupTypes.PICKUP_SUMMARY_SUCCESS);
export const PickupSummaryFailed = createAction(PickupTypes.PICKUP_SUMMARY_FAILURE);

