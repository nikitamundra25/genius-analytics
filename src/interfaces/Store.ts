import { IDashboardMainModel } from './Dashboard';
import { IPickupModel } from './Pickup';

export interface ImainState {
  showLoader: boolean;
}

export interface IRootState {
  DashboardReducer: IDashboardMainModel;
  PickupReducer: IPickupModel;
  mainReducer: ImainState
}
