import { createLogic, Logic } from "redux-logic";
import {
  PivotTableActionTypes,
  PivotTableDataFailed,
  PivotTableDataSuccess,
  togglePivotTableLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getpivotTableLogic = createLogic({
  type: PivotTableActionTypes.REQUETS_PIVOT_TABLE_DATA,
  process: async ({ action }: any, dispatch: any, done) => {
    dispatch(
      togglePivotTableLoader({
        isLoading: true,
      })
    );

    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "PivotTable",
      "/pivotTable.json",
      "GET"
    );
    if (isError) {
      dispatch(PivotTableDataFailed());
      done();
      return;
    }
    dispatch(
      PivotTableDataSuccess({
        data: data.pivotData,
      })
    );
    done();
  },
});

export const PivotTableLogics: Logic[] = [
  getpivotTableLogic as Logic,
];
