import { createAction } from "redux-actions";

export enum StayYTDActionTypes {
  REQUETS_STAY_YTD_DATA = "Request StayYTD Data",
  TOGGLE_STAY_YTD_LOADER = "Toggle StayYTD loader",
  STAY_YTD_DATA_SUCCESS = "Requested StayYTD data fetched successfully",
  STAY_YTD_DATA_FAILED = "Requested StayYTD data fetching failed",

  REQUETS_STAY_YTD_PAST_DATA = "Request StayYTD PAST Data",
  TOGGLE_STAY_YTD_PAST_LOADER = "Toggle StayYTD PAST loader",
  STAY_YTD_PAST_DATA_SUCCESS = "Requested StayYTD PAST data fetched successfully",
  STAY_YTD_PAST_DATA_FAILED = "Requested StayYTD PAST data fetching failed",

  REQUETS_STAY_YTD_FUTURE_DATA = "Request StayYTD FUTURE Data",
  TOGGLE_STAY_YTD_FUTURE_LOADER = "Toggle StayYTD FUTURE loader",
  STAY_YTD_FUTURE_DATA_SUCCESS = "Requested StayYTD FUTURE data fetched successfully",
  STAY_YTD_FUTURE_DATA_FAILED = "Requested StayYTD FUTURE data fetching failed",
}

export const requestStayYTDData = createAction(StayYTDActionTypes.REQUETS_STAY_YTD_DATA);
export const toggleStayYTDLoader = createAction(StayYTDActionTypes.TOGGLE_STAY_YTD_LOADER);
export const StayYTDDataSuccess = createAction(StayYTDActionTypes.STAY_YTD_DATA_SUCCESS);
export const StayYTDDataFailed = createAction(StayYTDActionTypes.STAY_YTD_DATA_FAILED);

// past
export const requestStayYTDPastData = createAction(StayYTDActionTypes.REQUETS_STAY_YTD_PAST_DATA);
export const toggleStayYTDPastLoader = createAction(StayYTDActionTypes.TOGGLE_STAY_YTD_PAST_LOADER);
export const StayYTDPastDataSuccess = createAction(StayYTDActionTypes.STAY_YTD_PAST_DATA_SUCCESS);
export const StayYTDPastDataFailed = createAction(StayYTDActionTypes.STAY_YTD_PAST_DATA_FAILED);

// future
export const requestStayYTDFutureData = createAction(StayYTDActionTypes.REQUETS_STAY_YTD_FUTURE_DATA);
export const toggleStayYTDFutureLoader = createAction(StayYTDActionTypes.TOGGLE_STAY_YTD_FUTURE_LOADER);
export const StayYTDFutureDataSuccess = createAction(StayYTDActionTypes.STAY_YTD_FUTURE_DATA_SUCCESS);
export const StayYTDFutureDataFailed = createAction(StayYTDActionTypes.STAY_YTD_FUTURE_DATA_FAILED);