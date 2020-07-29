import { createLogic, Logic } from "redux-logic";
import {
  KeyBusinessMetricsActionTypes,
  KeyBusinessMetricsDataFailed,
  KeyBusinessMetricsDataSuccess,
  toggleKeyBusinessMetricsLoader,
} from "../actions";
import { ApiHelper } from "../helper";

const getKeyBusinessMetricsDataLogic = createLogic({
  type: KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleKeyBusinessMetricsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/KeyBusinessMetrics.json",
      "GET"
    );
    if (isError) {
      dispatch(KeyBusinessMetricsDataFailed());
      done();
      return;
    }
    dispatch(
      KeyBusinessMetricsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const KeyBusinessMetricsDataLogics: Logic[] = [getKeyBusinessMetricsDataLogic as Logic];
