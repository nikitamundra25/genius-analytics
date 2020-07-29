import { createAction } from "redux-actions";

export enum RGIYOYVarianceActionTypes {
  REQUETS_RGI_YOY_VARIANCE_DATA = "Request Rgi yoy variance Data",
  TOGGLE_RGI_YOY_VARIANCE_LOADER = "Toggle Rgi yoy variance loader",
  RGI_YOY_VARIANCE_DATA_SUCCESS = "Requested Rgi yoy variance data fetched successfully",
  RGI_YOY_VARIANCE_DATA_FAILED = "Requested Rgi yoy variance data fetching failed",
}

export const requestRGIYOYVarianceData = createAction(RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_DATA);
export const toggleRGIYOYVarianceLoader = createAction(RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_LOADER);
export const RGIYOYVarianceDataSuccess = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_DATA_SUCCESS);
export const RGIYOYVarianceDataFailed = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_DATA_FAILED);
