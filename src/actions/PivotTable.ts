import { createAction } from "redux-actions";

export enum PivotTableActionTypes {
  REQUETS_PIVOT_TABLE_DATA = "Request Pivot Table Data",
  TOGGLE_PIVOT_TABLE_LOADER = "Toggle Pivot Table loader",
  PIVOT_TABLE_DATA_SUCCESS = "Requested Pivot Table data fetched successfully",
  PIVOT_TABLE_DATA_FAILED = "Requested Pivot Table data fetching failed",
}

export const requestPivotTableData = createAction(PivotTableActionTypes.REQUETS_PIVOT_TABLE_DATA);
export const togglePivotTableLoader = createAction(PivotTableActionTypes.TOGGLE_PIVOT_TABLE_LOADER);
export const PivotTableDataSuccess = createAction(PivotTableActionTypes.PIVOT_TABLE_DATA_SUCCESS);
export const PivotTableDataFailed = createAction(PivotTableActionTypes.PIVOT_TABLE_DATA_FAILED);
