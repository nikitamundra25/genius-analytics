import { createLogic, Logic } from "redux-logic";
import {
  CumulativeTableActionTypes,
  CumulativeTableDataFailed,
  CumulativeTableDataSuccess,
  toggleCumulativeTableLoader,
  toggleCumulativeTablePastLoader,
  CumulativeTablePastDataFailed,
  CumulativeTablePastDataSuccess,
  toggleCumulativeTableFutureLoader,
  CumulativeTableFutureDataFailed,
  CumulativeTableFutureDataSuccess,
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

// past
const getCumulativeTablePastLogic = createLogic({
  type: CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleCumulativeTablePastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/pastCumulativeTable.json",
      "GET"
    );
    if (isError) {
      dispatch(CumulativeTablePastDataFailed());
      done();
      return;
    }
    dispatch(
      CumulativeTablePastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getCumulativeTableFutureLogic = createLogic({
  type: CumulativeTableActionTypes.REQUETS_CUMULATIVE_TABLE_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleCumulativeTableFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardYearly",
      "/futureCumulativeTable.json",
      "GET"
    );
    if (isError) {
      dispatch(CumulativeTableFutureDataFailed());
      done();
      return;
    }
    dispatch(
      CumulativeTableFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const CumulativeTableLogics: Logic[] = [getCumulativeTableLogic as Logic, getCumulativeTablePastLogic as Logic, getCumulativeTableFutureLogic as Logic];
