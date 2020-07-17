import { IRootState } from './../interfaces';
import { Reducer, AnyAction, combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { DashboardReducer } from './Dashboard';
import { PickupReducer } from './Pickup';

export const mainReducer = handleActions(
  {
    SHOW_LOADER: () => ({
      showLoader: true,
    }),
    HIDE_LOADER: () => ({
      showLoader: false,
    }),
  },
  {
    showLoader: false,
  },
);

export const RootReducer: Reducer<IRootState, AnyAction> = combineReducers<
  IRootState
>({
  mainReducer: mainReducer as any,
  DashboardReducer:DashboardReducer as any,
  PickupReducer: PickupReducer as any
});
