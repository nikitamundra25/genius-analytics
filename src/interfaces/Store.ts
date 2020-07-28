import { IDashboardMainModel } from "./Dashboard";
import { IPickupModel } from "./Pickup";
import { IBOBModel } from "./BOB";

export interface ImainState {
  showLoader: boolean;
}

export interface IRootState {
  DashboardReducer: IDashboardMainModel;
  PickupReducer: IPickupModel;
  mainReducer: ImainState;
  BOBReducer: IBOBModel;
}
