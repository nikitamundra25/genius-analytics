import { createAction } from "redux-actions";

export enum CumulativeTableActionTypes {
  REQUETS_CUMULATIVE_TABLE_DATA = "Request Cumulative Table Data",
  TOGGLE_CUMULATIVE_TABLE_LOADER = "Toggle Cumulative Table loader",
  CUMULATIVE_TABLE_DATA_SUCCESS = "Requested Cumulative Table data fetched successfully",
  CUMULATIVE_TABLE_DATA_FAILED = "Requested Cumulative Table data fetching failed",


  REQUETS_CUMULATIVE_TABLE_PAST_DATA = "Request Cumulative Table past Data",
  TOGGLE_CUMULATIVE_TABLE_PAST_LOADER = "Toggle Cumulative Table past loader",
  CUMULATIVE_TABLE_PAST_DATA_SUCCESS = "Requested Cumulative Table past data fetched successfully",
  CUMULATIVE_TABLE_PAST_DATA_FAILED = "Requested Cumulative Table past data fetching failed",

  REQUETS_CUMULATIVE_TABLE_FUTURE_DATA = "Request Cumulative Table future Data",
  TOGGLE_CUMULATIVE_TABLE_FUTURE_LOADER = "Toggle Cumulative Table future loader",
  CUMULATIVE_TABLE_FUTURE_DATA_SUCCESS = "Requested Cumulative Table future data fetched successfully",
  CUMULATIVE_TABLE_FUTURE_DATA_FAILED = "Requested Cumulative Table future data fetching failed",
}

export const requestCumulativeTableData = createAction(CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_DATA);
export const toggleCumulativeTableLoader = createAction(CumulativeTableActionTypes.TOGGLE_CUMULATIVE_TABLE_LOADER);
export const CumulativeTableDataSuccess = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_DATA_SUCCESS);
export const CumulativeTableDataFailed = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_DATA_FAILED);

// past
export const requestCumulativeTablePastData = createAction(CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_PAST_DATA);
export const toggleCumulativeTablePastLoader = createAction(CumulativeTableActionTypes.TOGGLE_CUMULATIVE_TABLE_PAST_LOADER);
export const CumulativeTablePastDataSuccess = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_PAST_DATA_SUCCESS);
export const CumulativeTablePastDataFailed = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_PAST_DATA_FAILED);

// future
export const requestCumulativeTableFutureData = createAction(CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_FUTURE_DATA);
export const toggleCumulativeTableFutureLoader = createAction(CumulativeTableActionTypes.TOGGLE_CUMULATIVE_TABLE_FUTURE_LOADER);
export const CumulativeTableFutureDataSuccess = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_FUTURE_DATA_SUCCESS);
export const CumulativeTableFutureDataFailed = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_FUTURE_DATA_FAILED);