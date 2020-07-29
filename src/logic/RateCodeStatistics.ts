import { createLogic, Logic } from "redux-logic";
import {
  RateCodeStatisticsActionTypes,
  RateCodeStatisticsDataFailed,
  RateCodeStatisticsDataSuccess,
  toggleRateCodeStatisticsLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getRateCodeStatisticsDataLogic = createLogic({
  type: RateCodeStatisticsActionTypes.REQUETS_RATE_CODE_STATISTICS_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRateCodeStatisticsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "DashboardMonthly",
      "/RateCodeStatistics.json",
      "GET"
    );
    if (isError) {
      dispatch(RateCodeStatisticsDataFailed());
      done();
      return;
    }
    dispatch(
      RateCodeStatisticsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RateCodeStatisticsDataLogics: Logic[] = [getRateCodeStatisticsDataLogic as Logic];
