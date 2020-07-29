import { createLogic, Logic } from "redux-logic";
import {
  BusinessMixActionTypes,
  BusinessMixDataFailed,
  BusinessMixDataSuccess,
  toggleBusinessMixLoader,
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

export const BusinessMixDataLogics: Logic[] = [getBusinessMixDataLogic as Logic];
