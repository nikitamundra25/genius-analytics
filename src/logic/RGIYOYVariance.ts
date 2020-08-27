import { createLogic, Logic } from "redux-logic";
import {
  RGIYOYVarianceActionTypes,
  RGIYOYVarianceDataFailed,
  RGIYOYVarianceDataSuccess,
  toggleRGIYOYVarianceLoader,
  toggleRGIYOYVariancePastLoader,
  RGIYOYVariancePastDataFailed,
  RGIYOYVariancePastDataSuccess,
  toggleRGIYOYVarianceFutureLoader,
  RGIYOYVarianceFutureDataFailed,
  RGIYOYVarianceFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getRGIYOYVarianceDataLogic = createLogic({
  type: RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIYOYVarianceLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/RGIYOYVariance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIYOYVarianceDataFailed());
      done();
      return;
    }
    dispatch(
      RGIYOYVarianceDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// PAST
const getRGIYOYVariancePastDataLogic = createLogic({
  type: RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIYOYVariancePastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastRGIYOYVariance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIYOYVariancePastDataFailed());
      done();
      return;
    }
    dispatch(
      RGIYOYVariancePastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getRGIYOYVarianceFutureDataLogic = createLogic({
  type: RGIYOYVarianceActionTypes.REQUETS_RGI_YOY_VARIANCE_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleRGIYOYVarianceFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureRGIYOYVariance.json",
      "GET"
    );
    if (isError) {
      dispatch(RGIYOYVarianceFutureDataFailed());
      done();
      return;
    }
    dispatch(
      RGIYOYVarianceFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const RGIYOYVarianceDataLogics: Logic[] = [getRGIYOYVarianceDataLogic as Logic, getRGIYOYVariancePastDataLogic as Logic, getRGIYOYVarianceFutureDataLogic as Logic];
