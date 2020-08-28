import { createLogic, Logic } from "redux-logic";
import {
  BOBActionTypes,
  BOBDataFailed,
  BOBDataSuccess,
  toggleBOBLoader,
  toggleBOBPastLoader,
  BOBPastDataFailed,
  BOBPastDataSuccess,
  toggleBOBFutureLoader,
  BOBFutureDataFailed,
  BOBFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

// Logic for current date data
const getBoBDataLogic = createLogic({
  type: BOBActionTypes.REQUETS_BOB_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleBOBLoader({
        isLoading: true,
      })
    );
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/BOBData.json",
      "GET"
    );
    if (isError) {
      dispatch(BOBDataFailed());
      done();
      return;
    }
    dispatch(
      BOBDataSuccess({
        data: data,
      })
    );
    done();
  },
});

// Logic for past date
const getPastBoBDataLogic = createLogic({
  type: BOBActionTypes.REQUETS_BOB_PAST_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleBOBPastLoader({
        isLoading: true,
      })
    );
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastBOBData.json",
      "GET"
    );
    if (isError) {
      dispatch(BOBPastDataFailed());
      done();
      return;
    }
    dispatch(
      BOBPastDataSuccess({
        data: data,
      })
    );
    done();
  },
});

// Logic for future date
const getFutureBoBDataLogic = createLogic({
  type: BOBActionTypes.REQUETS_BOB_FUTURE_DATA,
  process: async ({ action }, dispatch: any, done) => {
    dispatch(
      toggleBOBFutureLoader({
        isLoading: true,
      })
    );
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureBOBData.json",
      "GET"
    );
    if (isError) {
      dispatch(BOBFutureDataFailed());
      done();
      return;
    }
    dispatch(
      BOBFutureDataSuccess({
        data: data,
      })
    );
    done();
  },
});
export const BOBDataLogics: Logic[] = [getBoBDataLogic as Logic, getPastBoBDataLogic as Logic, getFutureBoBDataLogic as Logic];
