import { createLogic, Logic } from "redux-logic";
import {
  BusinessMixActionTypes,
  BusinessMixDataFailed,
  BusinessMixDataSuccess,
  toggleBusinessMixLoader,
  toggleBusinessMixPastLoader,
  BusinessMixPastDataFailed,
  BusinessMixPastDataSuccess,
  toggleBusinessMixFutureLoader,
  BusinessMixFutureDataFailed,
  BusinessMixFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getBusinessMixDataLogic = createLogic({
  type: BusinessMixActionTypes.REQUETS_BUSINESS_MIX_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
        toggleBusinessMixLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/BusinessMix.json",
      "GET"
    );
    if (isError) {
      dispatch(BusinessMixDataFailed());
      done();
      return;
    }
    dispatch(
      BusinessMixDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// past
const getBusinessMixDataPastLogic = createLogic({
  type: BusinessMixActionTypes.REQUETS_BUSINESS_MIX_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleBusinessMixPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastBusinessMix.json",
      "GET"
    );
    if (isError) {
      dispatch(BusinessMixPastDataFailed());
      done();
      return;
    }
    dispatch(
      BusinessMixPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// future
const getBusinessMixDataFutureLogic = createLogic({
  type: BusinessMixActionTypes.REQUETS_BUSINESS_MIX_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleBusinessMixFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureBusinessMix.json",
      "GET"
    );
    if (isError) {
      dispatch(BusinessMixFutureDataFailed());
      done();
      return;
    }
    dispatch(
      BusinessMixFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const BusinessMixDataLogics: Logic[] = [getBusinessMixDataLogic as Logic, getBusinessMixDataPastLogic as Logic, getBusinessMixDataFutureLogic as Logic];
