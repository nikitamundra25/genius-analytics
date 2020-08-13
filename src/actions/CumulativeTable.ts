import { createAction } from "redux-actions";

export enum CumulativeTableActionTypes {
  REQUETS_CUMULATIVE_TABLE_DATA = "Request Cumulative Table Data",
  TOGGLE_CUMULATIVE_TABLE_LOADER = "Toggle Cumulative Table loader",
  CUMULATIVE_TABLE_DATA_SUCCESS = "Requested Cumulative Table data fetched successfully",
  CUMULATIVE_TABLE_DATA_FAILED = "Requested Cumulative Table data fetching failed",
}

export const requestCumulativeTableData = createAction(CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_DATA);
export const toggleCumulativeTableLoader = createAction(CumulativeTableActionTypes.TOGGLE_CUMULATIVE_TABLE_LOADER);
export const CumulativeTableDataSuccess = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_DATA_SUCCESS);
export const CumulativeTableDataFailed = createAction(CumulativeTableActionTypes.CUMULATIVE_TABLE_DATA_FAILED);
