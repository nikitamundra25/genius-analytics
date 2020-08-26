import { createLogic, Logic } from "redux-logic";
import {
  KeyBusinessMetricsActionTypes,
  KeyBusinessMetricsDataFailed,
  KeyBusinessMetricsDataSuccess,
  toggleKeyBusinessMetricsLoader,
  toggleKeyBusinessMetricsPastLoader,
  KeyBusinessMetricsPastDataFailed,
  KeyBusinessMetricsPastDataSuccess,
  toggleKeyBusinessMetricsFutureLoader,
  KeyBusinessMetricsFutureDataFailed,
  KeyBusinessMetricFuturesDataSuccess,
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

// past
const getKeyBusinessMetricsDataPastLogic = createLogic({
  type: KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleKeyBusinessMetricsPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastKeyBusinessMetrics.json",
      "GET"
    );
    if (isError) {
      dispatch(KeyBusinessMetricsPastDataFailed());
      done();
      return;
    }
    dispatch(
      KeyBusinessMetricsPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getKeyBusinessMetricsDataFutureLogic = createLogic({
  type: KeyBusinessMetricsActionTypes.REQUETS_KEY_BUSINESS_METRICS_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleKeyBusinessMetricsFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureKeyBusinessMetrics.json",
      "GET"
    );
    if (isError) {
      dispatch(KeyBusinessMetricsFutureDataFailed());
      done();
      return;
    }
    dispatch(
      KeyBusinessMetricFuturesDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const KeyBusinessMetricsDataLogics: Logic[] = [getKeyBusinessMetricsDataLogic as Logic, getKeyBusinessMetricsDataPastLogic as Logic, getKeyBusinessMetricsDataFutureLogic as Logic ];
