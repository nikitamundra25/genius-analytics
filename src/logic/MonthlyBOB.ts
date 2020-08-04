import { createLogic, Logic } from "redux-logic";
import {
  MonthlyBOBActionTypes,
  MonthlyBOBDataFailed,
  MonthlyBOBDataSuccess,
  toggleMonthlyBOBLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getMonthlyBOBLogic = createLogic({
  type: MonthlyBOBActionTypes.REQUETS_MONTHLY_BOB_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMonthlyBOBLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/MonthlyBOB.json",
      "GET"
    );
    if (isError) {
      dispatch(MonthlyBOBDataFailed());
      done();
      return;
    }
    dispatch(
      MonthlyBOBDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MonthlyBOBLogics: Logic[] = [getMonthlyBOBLogic as Logic];
