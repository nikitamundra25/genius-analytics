import { createLogic, Logic } from "redux-logic";
import {
  OccupacyStaticsActionTypes,
  OccupacyStaticsDataFailed,
  OccupacyStaticsDataSuccess,
  toggleOccupacyStaticsLoader,
  toggleOccupacyStaticsPastLoader,
  OccupacyStaticsPastDataFailed,
  OccupacyStaticsPastDataSuccess,
  toggleOccupacyStaticsFutureLoader,
  OccupacyStaticsFutureDataFailed,
  OccupacyStaticsFutureDataSuccess,
} from "../actions";
import { ApiHelper } from "../helper";

const getOccupacyStaticsDataLogic = createLogic({
  type: OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_DATA,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
        toggleOccupacyStaticsLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/OccupacyStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(OccupacyStaticsDataFailed());
      done();
      return;
    }
    dispatch(
      OccupacyStaticsDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

// pAST
const getOccupacyStaticsPastDataLogic = createLogic({
  type: OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_PAST_DATA,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
        toggleOccupacyStaticsPastLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/pastOccupacyStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(OccupacyStaticsPastDataFailed());
      done();
      return;
    }
    dispatch(
      OccupacyStaticsPastDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

//  Future
const getOccupacyStaticsFutureDataLogic = createLogic({
  type: OccupacyStaticsActionTypes.REQUETS_OCCUPACY_STATICS_FUTURE_DATA,
  process: async ({ action }:any, dispatch: any, done) => {
    dispatch(
        toggleOccupacyStaticsFutureLoader({
        isLoading: true,
      })
    );
    
    const { isError, data } = await new ApiHelper().FetchFromLocalJSONFile(
      "Dashboard",
      "/futureOccupacyStatics.json",
      "GET"
    );
    if (isError) {
      dispatch(OccupacyStaticsFutureDataFailed());
      done();
      return;
    }
    dispatch(
      OccupacyStaticsFutureDataSuccess({
        data: data.data,
      })
    );
    done();
  },
});

export const OccupacyStaticsDataLogics: Logic[] = [getOccupacyStaticsDataLogic as Logic, getOccupacyStaticsPastDataLogic as Logic, getOccupacyStaticsFutureDataLogic as Logic];
