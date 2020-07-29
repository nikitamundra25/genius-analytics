import { createAction } from "redux-actions";

export enum StayYTDActionTypes {
  REQUETS_STAY_YTD_DATA = "Request StayYTD Data",
  TOGGLE_STAY_YTD_LOADER = "Toggle StayYTD loader",
  STAY_YTD_DATA_SUCCESS = "Requested StayYTD data fetched successfully",
  STAY_YTD_DATA_FAILED = "Requested StayYTD data fetching failed",
}

export const requestStayYTDData = createAction(StayYTDActionTypes.REQUETS_STAY_YTD_DATA);
export const toggleStayYTDLoader = createAction(StayYTDActionTypes.TOGGLE_STAY_YTD_LOADER);
export const StayYTDDataSuccess = createAction(StayYTDActionTypes.STAY_YTD_DATA_SUCCESS);
export const StayYTDDataFailed = createAction(StayYTDActionTypes.STAY_YTD_DATA_FAILED);
