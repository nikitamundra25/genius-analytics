import { createAction } from "redux-actions";

export enum RGIYOYVarianceActionTypes {
  REQUETS_RGI_YOY_VARIANCE_DATA = "Request Rgi yoy variance Data",
  TOGGLE_RGI_YOY_VARIANCE_LOADER = "Toggle Rgi yoy variance loader",
  RGI_YOY_VARIANCE_DATA_SUCCESS = "Requested Rgi yoy variance data fetched successfully",
  RGI_YOY_VARIANCE_DATA_FAILED = "Requested Rgi yoy variance data fetching failed",

  REQUETS_RGI_YOY_VARIANCE_PAST_DATA = "Request Rgi yoy variance past Data",
  TOGGLE_RGI_YOY_VARIANCE_PAST_LOADER = "Toggle Rgi yoy variance past loader",
  RGI_YOY_VARIANCE_PAST_DATA_SUCCESS = "Requested Rgi yoy variance past  data fetched successfully",
  RGI_YOY_VARIANCE_PAST_DATA_FAILED = "Requested Rgi yoy variance past data fetching failed",

  REQUETS_RGI_YOY_VARIANCE_FUTURE_DATA = "Request Rgi yoy variance future Data",
  TOGGLE_RGI_YOY_VARIANCE_FUTURE_LOADER = "Toggle Rgi yoy variance future  loader",
  RGI_YOY_VARIANCE_FUTURE_DATA_SUCCESS = "Requested Rgi yoy variance future data fetched successfully",
  RGI_YOY_VARIANCE_FUTURE_DATA_FAILED = "Requested Rgi yoy variance  future data fetching failed",

}

export const requestRGIYOYVarianceData = createAction(RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_DATA);
export const toggleRGIYOYVarianceLoader = createAction(RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_LOADER);
export const RGIYOYVarianceDataSuccess = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_DATA_SUCCESS);
export const RGIYOYVarianceDataFailed = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_DATA_FAILED);

// past
export const requestRGIYOYVariancePastData = createAction(RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_PAST_DATA);
export const toggleRGIYOYVariancePastLoader = createAction(RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_PAST_LOADER);
export const RGIYOYVariancePastDataSuccess = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_PAST_DATA_SUCCESS);
export const RGIYOYVariancePastDataFailed = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_PAST_DATA_FAILED);

// future
export const requestRGIYOYVarianceFutureData = createAction(RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_FUTURE_DATA);
export const toggleRGIYOYVarianceFutureLoader = createAction(RGIYOYVarianceActionTypes.TOGGLE_RGI_YOY_VARIANCE_FUTURE_LOADER);
export const RGIYOYVarianceFutureDataSuccess = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_FUTURE_DATA_SUCCESS);
export const RGIYOYVarianceFutureDataFailed = createAction(RGIYOYVarianceActionTypes.RGI_YOY_VARIANCE_FUTURE_DATA_FAILED);

