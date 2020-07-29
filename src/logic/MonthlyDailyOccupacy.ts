import { createLogic, Logic } from "redux-logic";
import {
  MonthlyDailyOccupacyActionTypes,
  MonthlyDailyOccupacyDataFailed,
  MonthlyDailyOccupacyDataSuccess,
  toggleMonthlyDailyOccupacyLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getMonthlyDailyOccupacyDataLogic = createLogic({
  type: MonthlyDailyOccupacyActionTypes.REQUETS_MONTHLY_DAILY_OCCUPACY_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleMonthlyDailyOccupacyLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/MonthlyDailyOccupacy.json",
      "GET"
    );
    if (isError) {
      dispatch(MonthlyDailyOccupacyDataFailed());
      done();
      return;
    }
    dispatch(
      MonthlyDailyOccupacyDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const MonthlyDailyOccupacyDataLogics: Logic[] = [getMonthlyDailyOccupacyDataLogic as Logic];
