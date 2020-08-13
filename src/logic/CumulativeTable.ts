import { createLogic, Logic } from "redux-logic";
import {
  CumulativeTableActionTypes,
  CumulativeTableDataFailed,
  CumulativeTableDataSuccess,
  toggleCumulativeTableLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getCumulativeTableLogic = createLogic({
  type: CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleCumulativeTableLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/CumulativeTable.json",
      "GET"
    );
    if (isError) {
      dispatch(CumulativeTableDataFailed());
      done();
      return;
    }
    dispatch(
      CumulativeTableDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const CumulativeTableLogics: Logic[] = [getCumulativeTableLogic as Logic];
